import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import React, { useRef, useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actSearchMovie, actTyping } from "redux/actions/movie";
import useStyles from "./MovieSearch.styles";

const MovieSearch = ({ toggleDrawer }) => {
  const dispatch = useDispatch();
  const listSearch = useSelector((state) => state.movieReducer.listSearch);
  const isTyping = useSelector((state) => state.movieReducer.isTyping);

  const classes = useStyles();
  const [focus, setFocus] = useState(false);
  const [keyword, setKeyword] = useState("");

  const typingTimeoutRef = useRef(null);

  const handleChange = (e) => {
    const q = e.target.value;
    setKeyword(q);

    dispatch(actTyping());

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      dispatch(actSearchMovie(q));
    }, 500);
  };

  const renderListMovie = () => {
    if (isTyping) {
      return (
        <Box className={classes.loading}>
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" />
          Loading...
        </Box>
      );
    }

    if (!keyword) {
      return (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          minHeight="80px"
          fontSize="16px"
        >
          Nhập tên phim cần tìm
        </Box>
      );
    }

    if (!listSearch.length) {
      return (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          minHeight="80px"
          fontSize="16px"
        >
          Không tìm thấy phim phù hợp
        </Box>
      );
    }

    return listSearch.map((movie) => {
      return (
        <Box
          onClick={toggleDrawer(false)}
          key={movie.maPhim}
          component={Link}
          to={`/home/movie-detail/${movie.maPhim}`}
          className="result-item"
        >
          <img src={movie.hinhAnh} alt={movie.biDanh} />
          <Box>
            <span>{movie.tenPhim}</span>
          </Box>
        </Box>
      );
    });
  };

  return (
    <div className={classes.root}>
      <Box component={InputGroup} className={`${classes.search}`}>
        <InputGroup.Prepend className={`${focus && "focus"}`}>
          <InputGroup.Text>
            <SearchIcon />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Tìm kiếm phim"
          onChange={handleChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </Box>
      <Box className={`${classes.result} ${focus && classes.show}`}>
        {renderListMovie()}
      </Box>
    </div>
  );
};

export default MovieSearch;
