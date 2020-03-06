import React, { useEffect } from "react";
import { Box, IconButton } from "@material-ui/core";
import { Tab, Tabs } from "react-bootstrap";
import Slider from "react-slick";
import Movie from "./../movie/movie";
import useStyles from "./style";
import { connect } from "react-redux";
import { actGetListMovieAPI } from "./../../redux/actions";
import ModalTrailer from "../modalTrailer/modalVideo";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";

function NextArrow(props) {
  const classes = useStyles();
  const { onClick  } = props;
  return (
    <IconButton size="small" onClick={onClick} className={classes.nextArrow} >
      <NavigateNext className={classes.iconArrow} />
    </IconButton>
  );
}

function PrevArrow(props) {
  const classes = useStyles();
  const { onClick} = props;
  return (
    <IconButton size="small" onClick={onClick} className={classes.prevArrow}>
      <NavigateBefore className={classes.iconArrow} />
    </IconButton>
  );
}

function ListMovie(props) {
  const classes = useStyles();
  const settings = {
    className: "slider",
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const renderShowingMovie = () => {
    return props.listMovie.map((movie, index) => (
      <div className={classes.slideItem}>
        <Movie key={index} movie={movie} />
      </div>
    ));
  };

  useEffect(() => {
    props.getListMovieAPI()
  }, [])

  return (
    <Box maxWidth="940px" mx="auto">
      <Tabs
        className={classes.tabs}
        defaultActiveKey="showing"
        id="lich-chieu"
        unmountOnExit={true}
      >
        <Tab eventKey="showing" title="Đang Chiếu">
          <Slider {...settings}>{renderShowingMovie()}</Slider>
        </Tab>
        <Tab eventKey="comming" title="Sắp Chiếu">
          HI
        </Tab>
      </Tabs>
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
    listMovie: state.movieReducer.listMovie
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
