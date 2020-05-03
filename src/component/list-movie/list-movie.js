import React, { useState, useEffect } from "react";
import { Box, Grid, Button } from "@material-ui/core";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Carousel from "react-bootstrap/Carousel";
import { connect } from "react-redux";
import shortid from 'shortid';

import useStyles from "./style";
import ModalTrailer from "../modal-trailer/modalTrailer";
import Movie from "./../movie/movie";
import { actgetListMovie } from "./../../redux/actions/index";

function ListMovie(props) {
  const classes = useStyles();

  let { listMovieComming, listMovieShowing, listMovie, getListMovie } = props;

  const [visible, setVisible] = useState(8);

  const perSlide = 8; // Số item trên trang
  const slideShowing = Math.ceil(listMovieShowing.length / perSlide); // Số trang
  const slideComming = Math.ceil(listMovieComming.length / perSlide); // Số trang

  const render = useRender(visible, perSlide);

  useEffect(() => {
    getListMovie();
    //eslint-disable-next-line
  }, []);

  return (
    <Box position="relative">
      <Box id="showtimes" className={classes.listMovie}>
        <img
          src={`${process.env.PUBLIC_URL}/images/shape-6.png`}
          className={classes.shape}
          alt="shape 6"
        />
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
    return (!listMovie.length
      ? [...Array(8)]
      : listMovie
    ).map((movie, index) => <Movie key={shortid.generate()} movie={movie} type={type} />);
  };

  const renderMovieMobile = (listMovie, indexSlide, type) => {
    return (!listMovie.length ? [...Array(8)] : listMovie)
      .slice(0, visible)
      .map((movie, index) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
