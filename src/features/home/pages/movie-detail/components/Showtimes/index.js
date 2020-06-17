import { Box, Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { memo } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useStyles from "./Showtimes.styles";

Showtimes.propTypes = {
  movieDetail: PropTypes.object.isRequired,
};

function Showtimes({ movieDetail }) {
  const classes = useStyles();
  const listCinemaLogo = useSelector(
    (state) => state.cinemaReducer.listCinemaLogo
  );

  const refactorLichChieu = () => {
    //thêm logo cho rạp vì api thiếu
    return movieDetail.lichChieu.map((item) => {
      const index = listCinemaLogo.findIndex(
        (cinema) => cinema.maHeThongRap === item.maHeThongRap
      );
      if (index > -1) item.logo = listCinemaLogo[index].logo;
      return item;
    });
  };

  const renderLogo = () => {
    return refactorLichChieu().map((item, itemIndex) => {
      return (
        <Nav.Item key={itemIndex}>
          <Nav.Link eventKey={itemIndex}>
            <img src={item.logo} alt={item.tenHeThongRap} />
          </Nav.Link>
        </Nav.Item>
      );
    });
  };

  const renderContent = () => {
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
                        <Grid container spacing={3}>
                          {lichChieu.thoiGianChieu.map((thoiGian) => (
                            <Grid
                              key={thoiGian.ngayChieu}
                              component={Box}
                              sm={6}
                              item
                              width="100%"
                              border="1px solid rgba(255,255,255,.1)"
                              textAlign="center"
                            >
                              <Typography className={classes.date}>
                                {thoiGian.ngayChieu}
                              </Typography>

                              <Box
                                display="flex"
                                flexWrap="wrap"
                                justifyContent="center"
                              >
                                {thoiGian.suatChieu.map((suat) => (
                                  <Link
                                    key={suat.maLichChieu}
                                    to={`/home/booking/${suat.maLichChieu}`}
                                    className={classes.time}
                                  >
                                    {suat.gioChieu}
                                  </Link>
                                ))}
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
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

export default memo(Showtimes);
