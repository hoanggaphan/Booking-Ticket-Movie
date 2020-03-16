import React, { useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Tab, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { actGetListMovieAPI } from "./../../redux/actions";
import Slider from "react-slick";
import Movie from "./../movie/movie";
import ModalTrailer from "../modal-trailer/modalTrailer";
import Search from "../search/search";
import useStyles from "./style";
import { NextArrow, PrevArrow } from "./arrow";

function ListMovie(props) {
  const classes = useStyles();
  const listMovie = useListMovie(props);
  const settings = useSetting();

  return (
    <Box className={classes.listMovie}>
      <Tab.Container id="lich-chieu" defaultActiveKey="showing">
        <Nav className="list-movie-nav">
          <Box className="list-movie-nav-items">
            <Nav.Item>
              <Nav.Link eventKey="showing">
                Đang Chiếu ({listMovie.amountShowing})
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="comming">
                Sắp Chiếu ({listMovie.amountComming})
              </Nav.Link>
            </Nav.Item>
          </Box>
          <Search />
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="showing">
            {listMovie.amountShowing ? (
              <>
                {/* VIEW IN WEB */}
                <Slider {...settings}>
                  {listMovie.renderMovieWeb(
                    listMovie.listMovieShowing,
                    "showing"
                  )}
                </Slider>

                {/* VIEW IN MOBILE */}
                <Box className="list-movie-mobile">
                  <Grid container>
                    {listMovie.renderMovieMobile(
                      listMovie.listMovieShowing,
                      "showing"
                    )}
                  </Grid>
                </Box>
              </>
            ) : (
              <Box
                component={Alert}
                className="list-movie-alert"
                severity="error"
                variant="filled"
              >
                Rất Tiếc! Không Tìm Thấy Phim Của Bạn. Hãy Thử Lại Với Tên Khác.
              </Box>
            )}
          </Tab.Pane>
          <Tab.Pane eventKey="comming">
            {listMovie.amountShowing ? (
              <>
                {/* VIEW IN WEB */}
                <Slider {...settings}>
                  {listMovie.renderMovieWeb(
                    listMovie.listMovieComming,
                    "comming"
                  )}
                </Slider>

                {/* VIEW IN MOBILE */}
                <Box className="list-movie-mobile">
                  <Grid container>
                    {listMovie.renderMovieMobile(
                      listMovie.listMovieComming,
                      "comming"
                    )}
                  </Grid>
                </Box>
              </>
            ) : (
              <Box
                component={Alert}
                className="list-movie-alert"
                severity="error"
                variant="filled"
              >
                Rất Tiếc! Không Tìm Thấy Phim Của Bạn. Hãy Thử Lại Với Tên Khác.
              </Box>
            )}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
      <ModalTrailer />
    </Box>
  );
}

//////////////// REFACTOR CODE WITH HOOK ///////////////////
const useListMovie = ({
  listMovieShowing,
  listMovieComming,
  keyword,
  getListMovieAPI
}) => {
  listMovieComming = listMovieComming.filter(
    movie => movie.tenPhim.toLowerCase().indexOf(keyword.toLowerCase()) > -1
  );
  listMovieShowing = listMovieShowing.filter(
    movie => movie.tenPhim.toLowerCase().indexOf(keyword.toLowerCase()) > -1
  );

  // render movie in web
  const renderMovieWeb = (listMovie, type) => {
    return listMovie.map((movie, index) => (
      <div className="list-movie-sliders-item">
        <Movie key={index} movie={movie} type={type} />
      </div>
    ));
  };

  // render movie in mobile
  const renderMovieMobile = (listMovie, type) => {
    return listMovie.map((movie, index) => {
      return <Movie key={index} movie={movie} type={type} />;
    });
  };

  //ComponentDidMount call API get listmovie
  useEffect(() => {
    getListMovieAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // return
  return {
    listMovieShowing,
    listMovieComming,
    renderMovieWeb,
    renderMovieMobile,
    amountShowing: listMovieShowing.length,
    amountComming: listMovieComming.length
  };
};

const useSetting = () => {
  return {
    className: "list-movie-sliders",
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
};
//////////////////////////////////////////////////////////

//////////////// Connect with Redux //////////////////////
const mapDispatchToProps = dispatch => {
  return {
    getListMovieAPI: () => {
      dispatch(actGetListMovieAPI());
    }
  };
};

const mapStateToProps = state => {
  return {
    listMovieShowing: state.movieReducer.listMovieShowing,
    listMovieComming: state.movieReducer.listMovieComming,
    keyword: state.movieReducer.keyword
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
