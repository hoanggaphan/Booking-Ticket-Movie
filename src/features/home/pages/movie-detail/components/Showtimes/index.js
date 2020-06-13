import { Box, Grid, Button } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import React, { useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actGetCinemaLogo } from "redux/actions/cinema";
import useStyles from "./Showtimes.styles";

function Showtimes() {
  const dispatch = useDispatch();
  const listCinemaLogo = useSelector(
    (state) => state.cinemaReducer.listCinemaLogo
  );
  const movieDetail = useSelector((state) => state.movieReducer.movieDetail);

  const classes = useStyles();

  useEffect(() => {
    dispatch(actGetCinemaLogo());
    // eslint-disable-next-line
  }, []);

  const refactorLichChieu = () => {
    //thêm logo cho rạp vì api thiếu
    if (movieDetail) {
      return movieDetail.lichChieu.map((item) => {
        const index = listCinemaLogo.findIndex(
          (cinema) => cinema.maHeThongRap === item.maHeThongRap
        );
        if (index > -1) item.logo = listCinemaLogo[index].logo;
        return item;
      });
    }
  };

  const renderLogo = () => {
    if (movieDetail) {
      return refactorLichChieu().map((item, itemIndex) => {
        return (
          <Nav.Item key={itemIndex}>
            <Nav.Link eventKey={itemIndex}>
              <img src={item.logo} alt={item.tenHeThongRap} />
            </Nav.Link>
          </Nav.Item>
        );
      });
    } else {
      return [...Array(6)].map((item, itemIndex) => {
        return (
          <Nav.Item key={itemIndex}>
            <Nav.Link eventKey={itemIndex}>
              <Skeleton variant="circle" width="50px" height="50px" />
            </Nav.Link>
          </Nav.Item>
        );
      });
    }
  };

  const renderContent = () => {
    if (movieDetail) {
      return refactorLichChieu().map((item, itemIndex) => {
        return (
          <Tab.Pane className="main-pane" key={itemIndex} eventKey={itemIndex}>
            <Tab.Container transition={false} defaultActiveKey={0}>
              <Grid container className={classes.gridContainer}>
                <Grid item xs={12} sm={5} className={classes.gridItem}>
                  <Nav className="flex-column">
                    {item.lstLichChieu.map((lichChieu, index) => (
                      <Nav.Item key={index}>
                        <Nav.Link eventKey={index}>
                          <img
                            src={lichChieu.thongTinRap.hinhAnh}
                            alt={lichChieu.tenCumRap}
                            width="50"
                            height="50"
                          />
                          <Box className="cinema-box">
                            <span className="cinema-name">
                              {lichChieu.thongTinRap.tenCumRap.split("-")[0]}
                              <span>
                                -{lichChieu.thongTinRap.tenCumRap.split("-")[1]}
                              </span>
                            </span>
                            <span className="cinema-location">
                              {lichChieu.thongTinRap.diaChi}
                            </span>
                          </Box>
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Tab.Content>
                    {item.lstLichChieu.map((lichChieu, index) => {
                      return (
                        <Tab.Pane key={index} eventKey={index}>
                          {lichChieu.thoiGianChieu.map((thoiGian) => (
                            <Dropdown key={thoiGian.ngayChieu}>
                              <Dropdown.Toggle>
                                {thoiGian.ngayChieu}
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                {thoiGian.suatChieu.map((suat) => (
                                  <Dropdown.Item
                                    as={Link}
                                    to={`/home/booking/${suat.maLichChieu}`}
                                    key={suat.maLichChieu}
                                  >
                                    {suat.gioChieu}
                                  </Dropdown.Item>
                                ))}
                              </Dropdown.Menu>
                            </Dropdown>
                          ))}
                        </Tab.Pane>
                      );
                    })}
                  </Tab.Content>
                </Grid>
              </Grid>
            </Tab.Container>
          </Tab.Pane>
        );
      });
    } else {
      return (
        <Box padding="15px 15px 0">
          <Skeleton variant="rect" width="100%" className={classes.skeleton} />
          <Skeleton variant="rect" width="100%" className={classes.skeleton} />
          <Skeleton variant="rect" width="100%" className={classes.skeleton} />
          <Skeleton variant="rect" width="100%" className={classes.skeleton} />
          <Skeleton variant="rect" width="50%" className={classes.skeleton} />
        </Box>
      );
    }
  };

  return (
    <Box className={classes.root}>
      <Tab.Container id="showtimes" transition={false} defaultActiveKey={0}>
        <Nav className="nav-bg">
          <Box className={classes.navList}>{renderLogo()}</Box>
          <Tab.Content>{renderContent()}</Tab.Content>
        </Nav>
      </Tab.Container>
    </Box>
  );
}

export default Showtimes;
