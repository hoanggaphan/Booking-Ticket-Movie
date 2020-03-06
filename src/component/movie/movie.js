import React, { useState } from "react";
import { Box, IconButton, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./style";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { connect } from "react-redux";
import { actViewTrailer } from "./../../redux/actions/index";
import StarRatings from "react-star-ratings";

function Movie(props) {
  const [error, setError] = useState(false);
  const { movie } = props;
  const classes = useStyles();

  const handleViewTrailer = () => {
    const trailerMovie = {
      movie,
      isOpen: true
    };
    props.viewTrailer(trailerMovie);
  };

  const handleLoadErrorImg = () => {
    setError(true);
  };

  return (
    <Box
      className={classes.movieItem}
      display="flex"
      flexDirection="column"
      alignItems="center"
      overflow="hidden"
      px="10px"
    >
      <Box width="100%" position="relative">
        <Box position="absolute" top="5px" left="5px">
          <img
            src={
              movie.danhGia > 9
                ? "c-16.png"
                : movie.danhGia > 8
                ? "c-18.png"
                : movie.danhGia > 6
                ? "c-13.png"
                : "p.png"
            }
          />
        </Box>
        <Box
          className={classes.starPoint}
          position="absolute"
          top="5px"
          right="5px"
          display="flex"
          flexDirection="column"
        >
          <Typography align="center" component="span" variant="h6">
            {movie.danhGia ? movie.danhGia : 0}
          </Typography>
          <StarRatings
            rating={movie.danhGia ? movie.danhGia / 2 : 0}  
            starRatedColor="red"
            starDimension="12px"
            starSpacing="0px"
          />
        </Box>
        <img
          src={error ? "load-error.jpg" : movie.hinhAnh}
          alt={movie.tenPhim}
          className={classes.imgMovie}
          onError={handleLoadErrorImg}
        />

        <Box className={classes.overPlay}>
          <IconButton onClick={handleViewTrailer}>
            <PlayCircleOutlineIcon className={classes.playIcon} />
          </IconButton>
          <Button
            className={classes.btnBook}
            variant="contained"
            size="large"
            color="secondary"
            to="#"
            component={Link}
          >
            Đặt Vé
          </Button>
        </Box>
      </Box>
      <Box position="relative">
        <Box component="h4" className={classes.nameMovie}>
          {movie.tenPhim}
        </Box>
      </Box>
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    viewTrailer: trailerMovie => {
      dispatch(actViewTrailer(trailerMovie));
    }
  };
};

export default connect(null, mapDispatchToProps)(Movie);
