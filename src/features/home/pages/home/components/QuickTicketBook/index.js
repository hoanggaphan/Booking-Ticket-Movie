import { Box, Button } from "@material-ui/core";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actGetShowtimesInfoAPI } from "redux/actions/cinema";
import useStyles from "./styles";

const QuickTicketBook = (props) => {
  const dispatch = useDispatch();
  const listMovieShowing = useSelector(
    (state) => state.movieReducer.listMovieShowing
  );
  const listCinema = useSelector((state) => state.movieReducer.listCinema);

  const classes = useStyles();
  const [lichChieuPhim, setLichChieuPhim] = useState([]);
  const [suatChieu, setSuatChieu] = useState([]);
  const [maLichChieu, setMaLichChieu] = useState(null);

  const [name, setName] = useState({
    movie: "Phim",
    cinema: "Rạp",
    day: "Ngày Xem",
    time: "Suất Chiếu",
  });

  const handleSetMovieName = (movie) => {
    setName({
      movie: movie.tenPhim,
      cinema: "Rạp",
      day: "Ngày Xem",
      time: "Suất Chiếu",
    });
    setMaLichChieu(null);
    setLichChieuPhim([]);
    setSuatChieu([]);
    dispatch(actGetShowtimesInfoAPI(movie.maPhim));
  };
  const renderDropdownMovie = () => {
    return listMovieShowing.map((movie, index) => {
      return (
        <Dropdown.Item key={index} onClick={() => handleSetMovieName(movie)}>
          {movie.tenPhim}
        </Dropdown.Item>
      );
    });
  };

  const handleSetCinemaName = ({ lichChieuPhim, tenCumRap }) => {
    setName((prevState) => ({
      ...prevState,
      cinema: tenCumRap,
      day: "Ngày Xem",
      time: "Suất Chiếu",
    }));
    setMaLichChieu(null);
    setSuatChieu([]);
    setLichChieuPhim(lichChieuPhim);
  };
  const renderDropdownCenima = () => {
    return listCinema.map((item, index) => {
      return (
        <Dropdown.Item key={index} onClick={() => handleSetCinemaName(item)}>
          {item.tenCumRap}
        </Dropdown.Item>
      );
    });
  };

  const handleSetDayName = ({ ngayChieu, suatChieu }) => {
    setName((prevState) => ({
      ...prevState,
      day: ngayChieu,
      time: "Suất Chiếu",
    }));
    setMaLichChieu(null);
    setSuatChieu(suatChieu);
  };
  const renderDropdownDays = () => {
    let ngayGioChieu = lichChieuPhim.map((item) => {
      return {
        ngayChieu: new Date(item.ngayChieuGioChieu).toLocaleDateString(),
        suatChieu: [
          {
            maLichChieu: item.maLichChieu,
            gioChieu: new Date(item.ngayChieuGioChieu).toLocaleTimeString(),
          },
        ],
      };
    });

    ngayGioChieu = ngayGioChieu.reduce((accumulator, current) => {
      const length = accumulator.length;
      if (
        length === 0 ||
        accumulator[length - 1].ngayChieu !== current.ngayChieu
      ) {
        accumulator.push(current);
      } else {
        accumulator[length - 1].suatChieu = [
          ...accumulator[length - 1].suatChieu,
          ...current.suatChieu,
        ];
      }
      return accumulator;
    }, []);

    return ngayGioChieu.map((item, index) => {
      return (
        <Dropdown.Item key={index} onClick={() => handleSetDayName(item)}>
          {item.ngayChieu}
        </Dropdown.Item>
      );
    });
  };

  const handleSetTimeName = ({ gioChieu, maLichChieu }) => {
    setName((prevState) => ({ ...prevState, time: gioChieu }));
    setMaLichChieu(maLichChieu);
  };
  const renderDropdownTime = () => {
    return suatChieu.map((item, index) => {
      return (
        <Dropdown.Item key={index} onClick={() => handleSetTimeName(item)}>
          {item.gioChieu}
        </Dropdown.Item>
      );
    });
  };

  return (
    <Box className={classes.quickBook}>
      <Dropdown>
        <Dropdown.Toggle as={Box}>
          <span>{name.movie}</span>
        </Dropdown.Toggle>
        <Dropdown.Menu flip={false}>{renderDropdownMovie()}</Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle as={Box}>
          <span>{name.cinema}</span>
        </Dropdown.Toggle>
        {listCinema.length > 0 ? (
          <Dropdown.Menu flip={false}>{renderDropdownCenima()}</Dropdown.Menu>
        ) : (
          <Dropdown.Menu flip={false}>
            <Dropdown.Item>Vui lòng chọn phim</Dropdown.Item>
          </Dropdown.Menu>
        )}
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle as={Box}>
          <span>{name.day}</span>
        </Dropdown.Toggle>
        {lichChieuPhim.length > 0 ? (
          <Dropdown.Menu flip={false}>{renderDropdownDays()}</Dropdown.Menu>
        ) : (
          <Dropdown.Menu flip={false}>
            <Dropdown.Item>Vui lòng chọn phim và rạp</Dropdown.Item>
          </Dropdown.Menu>
        )}
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle as={Box}>
          <span>{name.time}</span>
        </Dropdown.Toggle>
        {suatChieu.length > 0 ? (
          <Dropdown.Menu flip={false}>{renderDropdownTime()}</Dropdown.Menu>
        ) : (
          <Dropdown.Menu flip={false}>
            <Dropdown.Item>Vui lòng chọn phim, rạp và ngày xem</Dropdown.Item>
          </Dropdown.Menu>
        )}
      </Dropdown>
      <Box className="quick-book-btn">
        <Button
          component={Link}
          variant="contained"
          color="primary"
          disabled={maLichChieu ? false : true}
          to={`/home/booking-movie/${maLichChieu}`}
          className="btn-book"
        >
          MUA VÉ NGAY
        </Button>
      </Box>
    </Box>
  );
};

export default QuickTicketBook;
