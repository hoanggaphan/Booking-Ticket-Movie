import React, { useEffect, useState } from "react";
import { Box, Grid, Button } from "@material-ui/core";
import { Tab, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { actGetListMovieAPI } from "./../../redux/actions";
import Slider from "react-slick";
import Movie from "./../movie/movie";
import ModalTrailer from "../modalTrailer/modalTrailer";
import Search from "../search/search";
import useStyles from "./style";
import { NextArrow, PrevArrow } from "./arrow";

function ListMovie(props) {
  const classes = useStyles();
  const [visible, setVisible] = useState(4); // numbers of movie render in mobile
  const listMovie = useListMovie(props, visible, setVisible);
  const settings = useSetting();

  return (
    <Box className={classes.listMovie}>
      <Tab.Container id="lich-chieu" defaultActiveKey="showing">
        <Nav className="list-movie-nav">
          <Box className="list-movie-nav-items">
            <Nav.Item>
              <Nav.Link eventKey="showing">
                Đang Chiếu ({listMovie.amount})
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="comming">Sắp Chiếu ()</Nav.Link>
            </Nav.Item>
          </Box>
          <Search />
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="showing">
            {/* VIEW IN WEB */}
            <Slider {...settings}>{listMovie.renderShowingMovieWeb()}</Slider>

            {/* VIEW IN MOBILE */}
            <Box display={{ xs: "block", sm: "none" }}>
              <Grid container>{listMovie.renderShowingMovieMobile()}</Grid>
              {/* Button SHOW MORE */}
              {visible < props.listMovie.length && (
                <Box
                  component={Button}
                  display={{ xs: "block", sm: "none" }}
                  variant="outlined"
                  className="list-movie-more-btn"
                  onClick={listMovie.showMoreMovie}
                >
                  XEM THÊM
                </Box>
              )}
            </Box>
          </Tab.Pane>
          <Tab.Pane eventKey="comming"></Tab.Pane>
        </Tab.Content>
      </Tab.Container>
      <ModalTrailer />
    </Box>
  );
}

//////////////// REFACTOR CODE WITH HOOK ///////////////////
const useListMovie = ({ listMovie, keyword, getListMovieAPI }, visible, setVisible) => {
  // Search movie before render
  listMovie = listMovie.filter(
    movie => movie.tenPhim.toLowerCase().indexOf(keyword.toLowerCase()) > -1
  );

  // render movie in web
  const renderShowingMovieWeb = () => {
    return listMovie.map((movie, index) => (
      <div className="list-movie-sliders-item">
        <Movie key={index} movie={movie} />
      </div>
    ));
  };

  // render movie in mobile
  const renderShowingMovieMobile = () => {
    return listMovie.slice(0, visible).map((movie, index) => {
      return <Box component={Movie} key={index} movie={movie} />;
    });
  };

  //ComponentDidMount call API get listmovie
  const showMoreMovie = () => {
    setVisible(listMovie.length);
  };

  // get list movie from API
  useEffect(() => {
    getListMovieAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // return
  return { renderShowingMovieWeb, renderShowingMovieMobile, showMoreMovie, amount: listMovie.length };
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
    listMovie: state.movieReducer.listMovie,
    keyword: state.movieReducer.keyword
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
