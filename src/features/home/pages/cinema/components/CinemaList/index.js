import { Box, Grid } from "@material-ui/core";
import shape5 from "assets/images/shape-5.png";
import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actGetCinemaList } from "redux/actions/cinema";
import useStyles from "./CinemaList.styles";

const refactorCinemaList = (movieList, listCinemaDetail) => {
  // thêm hình ảnh cho list lịch chiếu theo cụm rạp vì API méo có =))
  return listCinemaDetail.map((cinema) => {
    cinema.lstCumRap.map((rap) => {
      rap.danhSachPhim.map((phim) => {
        const movie = movieList.find((item) => item.maPhim === phim.maPhim);
        phim.hinhAnh = movie.hinhAnh;
        phim.ngayKhoiChieu = movie.ngayKhoiChieu;

        //Thêm list lịch chiếu theo ngày dữa vào list lịch chiếu theo phim
        phim.lstLichChieuTheoNgay = phim.lstLichChieuTheoPhim.map(
          (lichChieu) => {
            const d = new Date(lichChieu.ngayChieuGioChieu);
            const date = ("0" + d.getDate()).slice(-2);
            const month = ("0" + (d.getMonth() + 1)).slice(-2);

            const myLichChieu = {
              ngayChieu: date + "/" + month,
              suatChieu: [
                {
                  gioChieu: new Date(
                    lichChieu.ngayChieuGioChieu
                  ).toLocaleTimeString(),
                  maLichChieu: lichChieu.maLichChieu,
                  maRap: lichChieu.maRap,
                  tenRap: lichChieu.tenRap,
                  giaVe: lichChieu.giaVe,
                },
              ],
            };
            return myLichChieu;
          }
        );
        // hợp nhất ngày chiếu bị trùng
        phim.lstLichChieuTheoNgay = phim.lstLichChieuTheoNgay.reduce(
          (accumulator, current) => {
            const length = accumulator.length;

            if (
              length === 0 ||
              accumulator[length - 1].ngayChieu !== current.ngayChieu
            ) {
              accumulator.push(current);
            } else if (
              accumulator[length - 1].ngayChieu === current.ngayChieu
            ) {
              accumulator[length - 1].suatChieu.push(...current.suatChieu);
            }
            return accumulator;
          },
          []
        );
        return phim;
      });
      return rap;
    });
    return cinema;
  });
};

function CinemaList() {
  const [ cinemaList, setCinemaList] = useState([]);

  const dispatch = useDispatch();
  const listCinemaLogo = useSelector(
    (state) => state.cinemaReducer.listCinemaLogo
  );
  
  let listCinemaDetail = useSelector(
    (state) => state.cinemaReducer.listCinemaDetail
  );
  const movieList = useSelector((state) => state.movieReducer.movieList);

  const classes = useStyles();

  useEffect(() => {
    dispatch(actGetCinemaList());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if(movieList.length && listCinemaDetail.length && !cinemaList.length) {
      const newCinemaList = refactorCinemaList(movieList, listCinemaDetail);
      setCinemaList(newCinemaList)
    }
    // eslint-disable-next-line
  }, [movieList, listCinemaDetail]);
  
  const renderCinemaLogo = () => {
    return listCinemaLogo.map((item, index) => (
      <Nav.Item key={index}>
        <Nav.Link eventKey={index}>
          <img src={item.logo} alt={item.biDanh} />
        </Nav.Link>
      </Nav.Item>
    ));
  };

  const renderListCinema = () => {
    return cinemaList.map((item, index) => (
      <Box component={Tab.Pane} height="100%" eventKey={index} key={index}>
        <Tab.Container transition={false} defaultActiveKey={0}>
          <Box component={Grid} height="100%" container>
            <Grid item xs={5} md={4}>
              <Nav className={classes.listCinema__nav}>
                {item.lstCumRap.map((cumRap, cumRapIndex) => {
                  // console.log(cumRap)
                  return (
                    <Nav.Item key={cumRap.maCumRap}>
                      <Nav.Link eventKey={cumRapIndex}>
                        <Box className={classes.listCinema__group}>
                          <img src={cumRap.hinhAnh} alt={cumRap.maCumRap} />

                          <Box overflow="hidden" marginLeft="15px" width="100%">
                            <span className={classes.listCinema__group__name}>
                              <>
                                <Box component="span">
                                  {cumRap.tenCumRap.split("-")[0]}
                                </Box>
                                - {cumRap.tenCumRap.split("-")[1]}
                              </>
                            </span>

                            <span
                              className={classes.listCinema__group__location}
                            >
                              {cumRap.diaChi}
                            </span>
                          </Box>
                        </Box>
                      </Nav.Link>
                    </Nav.Item>
                  );
                })}
              </Nav>
            </Grid>

            <Grid item xs={7} md={8}>
              {item.lstCumRap.map((cumRap, cumRapIndex) => {
                // console.log(cumRap)
                return (
                  <Tab.Content
                    className={classes.listCinema__nav}
                    key={cumRap.maCumRap}
                  >
                    <Tab.Pane eventKey={cumRapIndex}>
                      {cumRap.danhSachPhim.map((phim) => {
                        // console.log(phim)
                        return (
                          <Box
                            key={phim.maPhim}
                            className={classes.listCinema__movie}
                          >
                            <Box mr="20px" maxWidth="90px">
                              <img
                                className={classes.listCinema__movie__img}
                                src={phim.hinhAnh}
                                alt={phim.tenPhim}
                              />
                            </Box>
                            <Box width="100%">
                              <span className={classes.listCinema__movie__name}>
                                {phim.tenPhim}
                              </span>
                              <Box className={classes.listCinema__date}>
                                {phim.lstLichChieuTheoNgay.map((lichChieu) => {
                                  // console.log(lichChieu);
                                  return (
                                    <Dropdown key={lichChieu.ngayChieu}>
                                      <Dropdown.Toggle
                                        as={Box}
                                        className={
                                          classes.listCinema__date__day
                                        }
                                      >
                                        {lichChieu.ngayChieu}
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        {lichChieu.suatChieu.map((suat) => (
                                          <Dropdown.Item
                                            as={Link}
                                            to={`home/booking/${suat.maLichChieu}`}
                                            key={suat.maLichChieu}
                                          >
                                            {suat.gioChieu}
                                          </Dropdown.Item>
                                        ))}
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  );
                                })}
                              </Box>
                            </Box>
                          </Box>
                        );
                      })}
                    </Tab.Pane>
                  </Tab.Content>
                );
              })}
            </Grid>
          </Box>
        </Tab.Container>
      </Box>
    ));
  };

  return (
    <Box className={classes.listCinema}>
      <img src={shape5} alt="shape 5" className={classes.shape} />
      <Box paddingTop="80px"></Box>
      <Box id="list-cinema">
        <Tab.Container transition={false} id="cum-rap" defaultActiveKey={0}>
          <Box bgcolor="#1f2251" component={Grid} height="100%" container>
            <Grid item xs={12} md={1}>
              <Nav className={classes.listCinema__logo}>
                {renderCinemaLogo()}
              </Nav>
            </Grid>
            <Grid item xs={12} md={11}>
              <Box component={Tab.Content}>{renderListCinema()}</Box>
            </Grid>
          </Box>
        </Tab.Container>
      </Box>
    </Box>
  );
}

export default CinemaList;
