import { Box, Button, Grid } from "@material-ui/core";
import shape6 from "assets/images/shape-6.png";
import ModalTrailer from "common/TrailerModal";
import Movie from "features/home/pages/home/components/Movie";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { connect } from "react-redux";
import { actgetListMovie } from "redux/actions/movie";
import shortid from "shortid";
import useStyles from "./styles";

function MovieList(props) {
  const classes = useStyles();

  let { listMovieComming, listMovieShowing, listMovie, getListMovie } = props;

  const [visible, setVisible] = useState(8);

  const perSlide = 8; // Số item trên trang
  const slideShowing = Math.ceil(listMovieShowing.length / perSlide) || 1; // Số trang
  const slideComming = Math.ceil(listMovieComming.length / perSlide) || 1; // Số trang

  const render = useRender(visible, perSlide);

  useEffect(() => {
    getListMovie();
    //eslint-disable-next-line
  }, []);

  return (
    <Box position="relative">
      <Box id="showtimes" className={classes.listMovie}>
        <img src={shape6} className={classes.shape} alt="shape 6" />
        <Tab.Container id="lich-chieu" defaultActiveKey="showing">
          <Nav className="list-movie-nav">
            <Box className="list-movie-nav-items">
              <Nav.Item>
                <Nav.Link eventKey="showing">
                  Đang Chiếu ({listMovieShowing.length})
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="comming">
                  Sắp Chiếu ({listMovieComming.length})
                </Nav.Link>
              </Nav.Item>
            </Box>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="showing">
              {/* VIEW IN WEB */}
              <Carousel interval={null} indicators={false}>
                {[...Array(slideShowing)].map((item, indexSlide) => (
                  <Carousel.Item>
                    <Box display="flex" flexWrap="wrap">
                      {render.renderMovieWeb(
                        listMovieShowing,
                        indexSlide,
                        "showing"
                      )}
                    </Box>
                  </Carousel.Item>
                ))}
              </Carousel>

              {/* VIEW IN MOBILE */}
              <Box className="list-movie-mobile">
                <Grid container>
                  {render.renderMovieMobile(listMovieShowing, "showing")}
                </Grid>
                {listMovieShowing.length > visible && (
                  <Button
                    className="list-movie-mobile-btn-more"
                    variant="outlined"
                    size="large"
                    onClick={() => setVisible(listMovie.length)}
                  >
                    Xem Thêm
                  </Button>
                )}
              </Box>
            </Tab.Pane>
            <Tab.Pane eventKey="comming">
              {/* VIEW IN WEB */}
              <Carousel interval={null} indicators={false}>
                {[...Array(slideComming)].map((item, indexSlide) => (
                  <Carousel.Item>
                    <Box display="flex" flexWrap="wrap">
                      {render.renderMovieWeb(
                        listMovieComming,
                        indexSlide,
                        "comming"
                      )}
                    </Box>
                  </Carousel.Item>
                ))}
              </Carousel>

              {/* VIEW IN MOBILE */}
              <Box className="list-movie-mobile">
                <Grid container>
                  {render.renderMovieMobile(listMovieComming, "comming")}
                </Grid>
                {listMovieComming.length > visible && (
                  <Button
                    className="list-movie-mobile-btn-more"
                    variant="outlined"
                    size="large"
                    onClick={() => setVisible(listMovie.length)}
                  >
                    Xem Thêm
                  </Button>
                )}
              </Box>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        <ModalTrailer />
      </Box>
    </Box>
  );
}

//////////////// REFACTOR CODE WITH HOOK ///////////////////
const useRender = (visible, perSlide) => {
  const renderMovieWeb = (listMovie, indexSlide, type) => {
    listMovie = listMovie.slice(
      indexSlide * perSlide,
      (indexSlide + 1) * perSlide
    );
    return (!listMovie.length ? [...Array(8)] : listMovie).map((movie) => (
      <Movie key={shortid.generate()} movie={movie} type={type} />
    ));
  };

  const renderMovieMobile = (listMovie, type) => {
    return (!listMovie.length ? [...Array(8)] : listMovie)
      .slice(0, visible)
      .map((movie) => {
        return <Movie key={shortid.generate()} movie={movie} type={type} />;
      });
  };

  return { renderMovieWeb, renderMovieMobile };
};

//////////////// Connect with Redux //////////////////////
const mapStateToProps = (state) => {
  return {
    listMovieShowing: state.movieReducer.listMovieShowing,
    listMovieComming: state.movieReducer.listMovieComming,
    listMovie: state.movieReducer.listMovie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListMovie: () => {
      dispatch(actgetListMovie());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
