import React, { useEffect } from "react";
import { Box, IconButton } from "@material-ui/core";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";
import { Tab, Nav} from "react-bootstrap";
import { connect } from "react-redux";
import { actGetListMovieAPI } from "./../../redux/actions";
import Slider from "react-slick";
import Movie from "./../movie/movie";
import ModalTrailer from "../modalTrailer/modalVideo";
import Search from "../search/search";
import useStyles from "./style";

function NextArrow(props) {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <IconButton size="small" onClick={onClick} className={classes.nextArrow}>
      <NavigateNext className={classes.iconArrow} />
    </IconButton>
  );
}

function PrevArrow(props) {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <IconButton size="small" onClick={onClick} className={classes.prevArrow}>
      <NavigateBefore className={classes.iconArrow} />
    </IconButton>
  );
}

function ListMovie(props) {
  const classes = useStyles();
  let { listMovie, keyword, getListMovieAPI } = props;

  const settings = {
    className: `${classes.slider}`,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesPerRow: 3
        }
      }
    ]
  };

  const renderShowingMovieWeb = () => {
    listMovie = listMovie.filter(
      movie => movie.tenPhim.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    );
    return listMovie.map((movie, index) => (
      <div className={classes.slideItem}>
        <Movie key={index} movie={movie} />
      </div>
    ));
  };

  useEffect(() => {
    getListMovieAPI();
  }, []);

  return (
    <Box className={classes.listMovie} mx="auto">
      <Tab.Container id="lich-chieu" defaultActiveKey="showing">
        <Nav className={classes.myNav}>
          <Box display="flex" alignItems="center" width="50%">
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
            <Slider {...settings}>{renderShowingMovieWeb()}</Slider>

            {/* VIEW LIST MOVIE IN MOBILE */}
          </Tab.Pane>
          <Tab.Pane eventKey="comming">
            {/* VIEW LIST MOVIE IN WEB */}
            <Slider {...settings}>{renderShowingMovieWeb()}</Slider>

            {/* VIEW LIST MOVIE IN MOBILE */}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
      <ModalTrailer />
    </Box>
  );
}

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
