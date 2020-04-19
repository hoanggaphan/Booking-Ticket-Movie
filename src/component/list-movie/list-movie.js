import React, { useState, useMemo, useEffect } from "react";
import { Box, Grid, Button, IconButton } from "@material-ui/core";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";
import { Tab, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import Slider from "react-slick";
import ModalTrailer from "../modal-trailer/modalTrailer";
import Movie from "./../movie/movie";
import { actgetListMovie } from './../../redux/actions/index';
import useStyles from "./style";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton size="small" onClick={onClick} className="next-arrow">
      <NavigateNext className="icon-arrow" />
    </IconButton>
  );
}
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton size="small" onClick={onClick} className="prev-arrow">
      <NavigateBefore className="icon-arrow" />
    </IconButton>
  );
}

function ListMovie(props) {
  const classes = useStyles();
  const [visible, setVisible] = useState(8);
  let { listMovieComming, listMovieShowing, isFetchingLstMovie, listMovie, getListMovie } = props;
  const render = useRender(isFetchingLstMovie, visible);

  const memoziedSettings = useMemo(() => {
    return {
      className: "list-movie-sliders",
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      rows: 2,
      slidesPerRow: 4,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
  }, []);

  useEffect(() => {
    getListMovie();
    //eslint-disable-next-line
  }, [])

  return (
    <Box position="relative">
      <Box id="showtimes" className={classes.listMovie}>
        <img src="shape-6.PNG" className={classes.shape} alt="shape 6" />
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
              <Slider {...memoziedSettings}>
                {render.renderMovieWeb(listMovieShowing, "showing")}
              </Slider>

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
              <Slider {...memoziedSettings}>
                {render.renderMovieWeb(listMovieComming, "comming")}
              </Slider>

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
const useRender = (isFetchingLstMovie, visible) => {
  const renderMovieWeb = (listMovie, type) => {
    return (isFetchingLstMovie ? [...Array(8)] : listMovie).map(
      (movie, index) => (
        <div className="list-movie-sliders-item">
          <Movie key={index} movie={movie} type={type} />
        </div>
      )
    );
  };
  const renderMovieMobile = (listMovie, type) => {
    return (isFetchingLstMovie ? [...Array(8)] : listMovie)
      .slice(0, visible)
      .map((movie, index) => {
        return <Movie key={index} movie={movie} type={type} />;
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
    isFetchingLstMovie: state.movieReducer.isFetchingLstMovie,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      getListMovie: () => {
          dispatch(actgetListMovie());
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
