import React, { useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import useStyles from "./style";
import { actGetListLogo, actGetListCinemaDetail } from "./../../redux/actions/index";

function ListCinema(props) {
  const classes = useStyles();
  let {
    listCinemaLogo,
    listCinemaDetail,
    listMovie,
    getListLogo,
    getListCinemaDetail,
  } = props;

  useEffect(() => {
    getListCinemaDetail();
    getListLogo();
    // eslint-disable-next-line
  }, []);

  const renderCinemaLogo = () => {
    return (!listCinemaDetail.length ? [...Array(6)] : listCinemaLogo).map(
      (item, index) => (
        <Nav.Item key={index}>
          <Nav.Link eventKey={index}>
            {item ? (
              <img src={item.logo} alt={item.biDanh} />
            ) : (
              <Box
                component={Skeleton}
                width="50px"
                height="50px!important"
                variant="circle"
              />
            )}
          </Nav.Link>
        </Nav.Item>
      )
    );
  };

  const renderListCinema = () => {
    // thêm hình ảnh cho list lịch chiếu theo cụm rạp vì API méo có =))
    if (listMovie.length) {
      listCinemaDetail = listCinemaDetail.map((cinema) => {
        cinema.lstCumRap.map((rap) => {
          rap.danhSachPhim.map((phim) => {
            const movie = listMovie.find((item) => item.maPhim === phim.maPhim);
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
    }

    return (!listCinemaDetail.length ? [...Array(6)] : listCinemaDetail).map(
      (item, index) => (
        <Box component={Tab.Pane} height="100%" eventKey={index} key={index}>
          <Tab.Container transition={false} defaultActiveKey={0}>
            <Box component={Grid} height="100%" container>
              <Grid item xs={5} md={4}>
                <Nav className="list-cinema-nav">
                  {(!listCinemaDetail.length
                    ? [...Array(6)]
                    : item.lstCumRap
                  ).map((cumRap, cumRapIndex) => (
                    <Nav.Item key={cumRap && cumRap.maCumRap}>
                      <Nav.Link eventKey={cumRapIndex}>
                        <Box className="list-cinema-group">
                          {cumRap ? (
                            <img src={cumRap.hinhAnh} alt={cumRap.maCumRap} />
                          ) : (
                            <Box
                              component={Skeleton}
                              variant="rect"
                              minWidth="50px"
                              height="50px!important"
                              borderRadius="15%"
                            />
                          )}

                          <Box overflow="hidden" marginLeft="15px" width="100%">
                            {cumRap ? (
                              <>
                                <span className="list-cinema-group-name">
                                  <>
                                    <Box component="span">
                                      {cumRap.tenCumRap.split("-")[0]}
                                    </Box>
                                    - {cumRap.tenCumRap.split("-")[1]}
                                  </>
                                </span>
                                <span className="list-cinema-group-location">
                                  {cumRap.diaChi}
                                </span>
                              </>
                            ) : (
                              <>
                                <Box
                                  component={Skeleton}
                                  variant="text"
                                  width="100%"
                                />
                                <Box
                                  component={Skeleton}
                                  variant="text"
                                  width="70%"
                                />
                              </>
                            )}
                          </Box>
                        </Box>
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Grid>
              <Grid item xs={7} md={8}>
                {(!listCinemaDetail.length
                  ? [...Array(6)]
                  : item.lstCumRap
                ).map((cumRap, cumRapIndex) => (
                  <Tab.Content className="list-cinema-nav " key={cumRapIndex}>
                    <Tab.Pane eventKey={cumRapIndex}>
                      {/* render list phim */}
                      {(!listCinemaDetail.length
                        ? Array.from(new Array(2))
                        : cumRap.danhSachPhim
                      ).map((phim) => (
                        <Box
                          key={cumRap && phim.maPhim}
                          className="list-cinema-movie"
                        >
                          <Box mr="20px" maxWidth="90px">
                            {cumRap ? (
                              <img
                                className="list-cinema-movie-img"
                                src={phim.hinhAnh}
                                alt={phim.tenPhim}
                                onError={(e) =>
                                  (e.target.src = `${process.env.PUBLIC_URL}/load-error.jpg`)
                                }
                              />
                            ) : (
                              <Box
                                component={Skeleton}
                                variant="rect"
                                borderRadius="3px"
                                marginRight="20px"
                                width="90px"
                                height="130px!important"
                              />
                            )}
                          </Box>
                          <Box width="100%">
                            {cumRap ? (
                              <>
                                <span className="list-cinema-movie-name">
                                  {phim.tenPhim}
                                </span>
                              </>
                            ) : (
                              <>
                                <Box
                                  component={Skeleton}
                                  variant="text"
                                  width="60%"
                                />
                              </>
                            )}
                            <Box className="list-cinema-movie-date">
                              {(!listCinemaDetail.length
                                ? Array.from(new Array(3))
                                : phim.lstLichChieuTheoNgay
                              ).map((lichChieu) => (
                                <>
                                  {lichChieu ? (
                                    <Dropdown key={lichChieu.ngayChieu}>
                                      <Dropdown.Toggle
                                        as={Box}
                                        className="list-cinema-movie-date-day"
                                      >
                                        {lichChieu.ngayChieu}
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        {lichChieu.suatChieu.map((suat) => (
                                          <Dropdown.Item
                                            as={Link}
                                            to={`/booking-movie/${suat.maLichChieu}`}
                                            key={suat.maLichChieu}
                                          >
                                            {suat.gioChieu}
                                          </Dropdown.Item>
                                        ))}
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  ) : (
                                    <Box
                                      component={Skeleton}
                                      variant="rect"
                                      width="53px"
                                      borderRadius="3px"
                                      height="32px!important"
                                      mr="5px"
                                      mb="10px"
                                    />
                                  )}
                                </>
                              ))}
                            </Box>
                          </Box>
                        </Box>
                      ))}
                    </Tab.Pane>
                  </Tab.Content>
                ))}
              </Grid>
            </Box>
          </Tab.Container>
        </Box>
      )
    );
  };

  return (
    <Box className={classes.listCinema}>
      <img
        src={`${process.env.PUBLIC_URL}/images/shape-5.png`}
        alt="shape 5"
        className={classes.shape}
      />
      <Box paddingTop="80px"></Box>
      <Box id="list-cinema">
        <Tab.Container transition={false} id="cum-rap" defaultActiveKey={0}>
          <Box bgcolor="#1f2251" component={Grid} height="100%" container>
            <Grid item xs={12} md={1}>
              <Nav className="list-cinema-nav-logo">{renderCinemaLogo()}</Nav>
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

const mapStateToProps = (state) => {
  return {
    listCinemaLogo: state.cinemaReducer.listCinemaLogo,
    listCinemaDetail: state.cinemaReducer.listCinemaDetail,
    listMovie: state.movieReducer.listMovie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListLogo: () => {
      dispatch(actGetListLogo());
    },
    getListCinemaDetail: () => {
      dispatch(actGetListCinemaDetail());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListCinema);
