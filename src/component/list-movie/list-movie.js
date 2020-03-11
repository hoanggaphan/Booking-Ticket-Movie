import React, { useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
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
  const listMovie = useListMovie(props);
  const settings = useSetting();

  return (
    <Box className={classes.listMovie}>
      <Tab.Container id="lich-chieu" defaultActiveKey="showing">
        <Nav className="list-movie-nav">
          <Box className="list-movie-nav-items">
            <Nav.Item>
              <Nav.Link eventKey="showing">Đang Chiếu</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="comming">Sắp Chiếu</Nav.Link>
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
            </Box>
          </Tab.Pane>
          <Tab.Pane eventKey="comming">
            {/* VIEW IN WEB */}
            <Slider {...settings}>{listMovie.renderShowingMovieWeb()}</Slider>

            {/* VIEW IN MOBILE */}
            <Box display={{ xs: "block", sm: "none" }}>
              <Grid container>{listMovie.renderShowingMovieMobile()}</Grid>
            </Box>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
      <ModalTrailer />
    </Box>
  );
}

//////////////// Refactor code with Hook ///////////////////
const useListMovie = ({ listMovie, keyword, getListMovieAPI }) => {
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
    return listMovie.map((movie, index) => {
      return <Box component={Movie} key={index} movie={movie} />;
    });
  };

  // get list movie from API
  useEffect(() => {
    getListMovieAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // return
  return { renderShowingMovieWeb, renderShowingMovieMobile };
};

const useSetting = () => {
  // config of Slider library
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
