import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { Tab, Tabs } from "react-bootstrap";
import Slider from "react-slick";
import Movie from "./../movie/movie";
import useStyles from "./style";
import { connect } from "react-redux";
import { actGetListMovieAPI } from "./../../redux/actions";
import ModalTrailer from "../modalTrailer/modalVideo";

function ListMovie(props) {
  const classes = useStyles();
  const settings = {
    className: "slider",
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 4
  };

  useEffect(() => {
    props.getListMovieAPI();
  }, []);

  const renderShowingMovie = () => {
    console.log(121)
    return props.listMovie.map((movie, index) => (
      <div>
        <Movie key={index} movie={movie} />
      </div>
    ));
  };

  return (
    <Box maxWidth="940px" mx="auto">
      <Tabs className={classes.tabs} defaultActiveKey="showing" id="lich-chieu">
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
