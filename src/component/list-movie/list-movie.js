import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { Tab, Nav} from "react-bootstrap";
import { connect } from "react-redux";
import { actGetListMovieAPI } from "./../../redux/actions";
import Slider from "react-slick";
import Movie from "./../movie/movie";
import ModalTrailer from "../modalTrailer/modalTrailer";
import Search from "../search/search";
import useStyles from "./style";
import {NextArrow, PrevArrow} from './arrow';

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
            {/* VIEW LIST MOVIE IN WEB */}
            <Slider {...settings}>{listMovie()}</Slider>

            {/* VIEW LIST MOVIE IN MOBILE */}
          </Tab.Pane>
          <Tab.Pane eventKey="comming">
            {/* VIEW LIST MOVIE IN WEB */}
            <Slider {...settings}>{listMovie()}</Slider>

            {/* VIEW LIST MOVIE IN MOBILE */}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
      <ModalTrailer />
    </Box>
  );
}

//////////////// Refactor code with Hook ///////////////////
const useListMovie = ({ listMovie, keyword, getListMovieAPI }) => {
  const renderShowingMovieWeb = () => {
    listMovie = listMovie.filter(
      movie => movie.tenPhim.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    );
    return listMovie.map((movie, index) => (
      <div className="list-movie-sliders-item">
        <Movie key={index} movie={movie} />
      </div>
    ));
  };

  useEffect(() => {
    getListMovieAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return renderShowingMovieWeb;
}

const useSetting = () => {
  return {
    className: "list-movie-sliders",
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesPerRow: 3
        }
      }
    ]
  };
}

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
