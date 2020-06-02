import { Box, Button, Grid } from "@material-ui/core";
import shape6 from "assets/images/shape-6.png";
import ModalTrailer from "common/TrailerModal";
import Movie from "features/home/pages/home/components/Movie";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { useDispatch, useSelector } from "react-redux";
import { actgetListMovie } from "redux/actions/movie";
import useStyles from "./MovieList.styles";

function MovieList() {
  const dispatch = useDispatch();
  const listMovieShowing = useSelector(
    (state) => state.movieReducer.listMovieShowing
  );
  const listMovieComming = useSelector(
    (state) => state.movieReducer.listMovieComming
  );
  const listMovie = useSelector((state) => state.movieReducer.listMovie);

  const classes = useStyles();
  const [visible, setVisible] = useState(8);

  const perSlide = 8; // Số item trên trang
  const slideShowing = Math.ceil(listMovieShowing.length / perSlide) || 1; // Số trang
  const slideComming = Math.ceil(listMovieComming.length / perSlide) || 1; // Số trang

  const render = useRender(visible, perSlide);

  useEffect(() => {
    dispatch(actgetListMovie());
    //eslint-disable-next-line
  }, []);

  const handleLoadMore = () => {
    setVisible(listMovie.length);
  };

  return (
    <Box position="relative">
      <Box id="showtimes" className={classes.listMovie}>
        <img src={shape6} className={classes.shape} alt="shape 6" />
        <Tab.Container id="lich-chieu" defaultActiveKey="showing">
          <Nav className={classes.listMovie__nav}>
            <Box className={classes.listMovie__navItems}>
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
                  <Carousel.Item key={indexSlide}>
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
              <Box className={classes.listMovie__phone}>
                <Grid container>
                  {render.renderMovieMobile(listMovieShowing, "showing")}
                </Grid>
                {listMovieShowing.length > visible && (
                  <Button
                    className={classes.listMovie__moreButton}
                    variant="outlined"
                    size="large"
                    onClick={handleLoadMore}
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
                  <Carousel.Item key={indexSlide}>
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
              <Box className={classes.listMovie__phone}>
                <Grid container>
                  {render.renderMovieMobile(listMovieComming, "comming")}
                </Grid>
                {listMovieComming.length > visible && (
                  <Button
                    className={classes.listMovie__moreButton}
                    variant="outlined"
                    size="large"
                    onClick={handleLoadMore}
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
    return listMovie.map((movie) => (
      <Movie key={movie.maPhim} movie={movie} type={type} />
    ));
  };

  const renderMovieMobile = (listMovie, type) =>
    listMovie
      .slice(0, visible)
      .map((movie) => <Movie key={movie.maPhim} movie={movie} type={type} />);

  return { renderMovieWeb, renderMovieMobile };
};

export default MovieList;
