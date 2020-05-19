import { Box, Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import React, { useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actGetListLogo } from "redux/actions";
import useStyles from "./styles";

function Showtimes(props) {
  const classes = useStyles();
  let {
    listCinemaLogo,
    detailMovie,
    isFechingDetailMovie,
    getListLogo,
  } = props;

  useEffect(() => {
    getListLogo();
    // eslint-disable-next-line
  }, []);

  const refactorLichChieu = () => {
    //thêm logo cho rạp vì api thiếu
    if (!isFechingDetailMovie) {
      return detailMovie.lichChieu.map((item) => {
        const index = listCinemaLogo.findIndex(
          (cinema) => cinema.maHeThongRap === item.maHeThongRap
        );
        if (index > -1) item.logo = listCinemaLogo[index].logo;
        return item;
      });
    }
  };

  const renderLogo = () => {
    if (!isFechingDetailMovie) {
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
    if (!isFechingDetailMovie) {
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
                    {item.lstLichChieu.map((lichChieu, index) => (
                      <Tab.Pane key={index} eventKey={index}>
                        {lichChieu.thoiGianChieu.map((thoiGian) => (
                          <Dropdown>
                            <Dropdown.Toggle>
                              {thoiGian.ngayChieu}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              {thoiGian.suatChieu.map((suat) => (
                                <Dropdown.Item>
                                  <Link
                                    to={`/home/booking-movie/${suat.maLichChieu}`}
                                  >
                                    {suat.gioChieu}
                                  </Link>
                                </Dropdown.Item>
                              ))}
                            </Dropdown.Menu>
                          </Dropdown>
                        ))}
                      </Tab.Pane>
                    ))}
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

const mapStateToProps = (state) => {
  return {
    listCinemaLogo: state.cinemaReducer.listCinemaLogo,
    detailMovie: state.movieReducer.detailMovie,
    isFechingDetailMovie: state.movieReducer.isFechingDetailMovie,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getListLogo: () => {
      dispatch(actGetListLogo());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Showtimes);
