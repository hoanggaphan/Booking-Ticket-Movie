import React, { useEffect, useState } from "react";
import { Box, Grid, Button } from "@material-ui/core";
import { Tab, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { actGetListMovieAPI } from "./../../redux/actions";
import Slider from "react-slick";
import Movie from "./../movie/movie";
import ModalTrailer from "../modal-trailer/modalTrailer";
import useStyles from "./style";
import { NextArrow, PrevArrow } from "./arrow";

function ListMovie(props) {
  const classes = useStyles();
  const [visible, setVisible] = useState(8);
  let { listMovieComming, listMovieShowing, isLoading, listMovie } = props;
  const render = useRender(isLoading, visible);

  const settings = {
    className: "list-movie-sliders",
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  
  useEffect(() => {
    props.getListMovieAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              <Slider {...settings}>
                {render.renderMovieWeb(listMovieShowing, "showing")}
              </Slider>

              {/* VIEW IN MOBILE */}
              <Box className="list-movie-mobile">
                <Grid container>
                  {render.renderMovieMobile(listMovieShowing,"showing")}
                </Grid>
                {listMovieShowing.length > visible &&
                  <Button 
                    className="list-movie-mobile-btn-more" 
                    variant="outlined" 
                    size="large" 
                    onClick={() => setVisible(listMovie.length)}
                  >
                    Xem Thêm
                  </Button>
                }
              </Box>
            </Tab.Pane>
            <Tab.Pane eventKey="comming">
              {/* VIEW IN WEB */}
              <Slider {...settings}>
                {render.renderMovieWeb(listMovieComming, "comming")}
              </Slider>

              {/* VIEW IN MOBILE */}
              <Box className="list-movie-mobile">
                <Grid container>
                  {render.renderMovieMobile(listMovieComming,"comming")}
                </Grid>
                {listMovieComming.length > visible && 
                  <Button 
                    className="list-movie-mobile-btn-more" 
                    variant="outlined" 
                    size="large" 
                    onClick={() => setVisible(listMovie.length)}
                  >
                    Xem Thêm
                  </Button>
                }
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
const useRender = (isLoading, visible) => {
  const renderMovieWeb = (listMovie, type) => {
    return (isLoading ? Array.from(new Array(8)) : listMovie).map(
      (movie, index) => (
        <div className="list-movie-sliders-item">
          <Movie key={index} movie={movie} type={type} />
        </div>
      )
    );
  };
  const renderMovieMobile = (listMovie, type) => {
    return (isLoading ? Array.from(new Array(8)) : listMovie).slice(0, visible).map(
      (movie, index) => {
        return <Movie key={index} movie={movie} type={type} />;
      }
    );
  };
  return { renderMovieWeb, renderMovieMobile };
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
    listMovieShowing: state.movieReducer.listMovieShowing,
    listMovieComming: state.movieReducer.listMovieComming,
    listMovie: state.movieReducer.listMovie,
    isLoading: state.movieReducer.isLoading
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
