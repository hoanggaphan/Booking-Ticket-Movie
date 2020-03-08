import React, { useState } from "react";
import { Box, IconButton, Button, Typography } from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import StarRatings from "react-star-ratings";
import { actViewTrailer } from "./../../redux/actions/index";
import useStyles from "./style";

const Movie = props => {
  const classes = useStyles();
  const { movie, viewTrailer } = props;
  const trailer = useTrailer(movie, viewTrailer);
  const errImg = useOnError();

  return (
    <Box className={classes.movie}>
      <Box
        borderRadius="10px"
        overflow="hidden"
        width="100%"
        position="relative"
      >
        <img
          src={errImg.error ? "load-error.jpg" : movie.hinhAnh}
          alt={movie.tenPhim}
          className="movie-img"
          {...errImg}
        />
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
            alt="phan loai tuoi"
          />
        </Box>
        <Box className="movie-starpoint">
          <Typography component="span" variant="h6">
            {movie.danhGia ? movie.danhGia : 0}
          </Typography>
          <StarRatings
            rating={movie.danhGia ? movie.danhGia / 2 : 0}
            starRatedColor="red"
            starDimension="12px"
            starSpacing="0px"
          />
        </Box>

        <Box className="movie-overplay">
          <IconButton {...trailer}>
            <PlayCircleOutlineIcon className="movie-play-icon" />
          </IconButton>
          <Button
            className="movie-book-btn"
            variant="contained"
            size="large"
            to="#"
            component={Link}
          >
            Đặt Vé
          </Button>
        </Box>
      </Box>
      <Box className="movie-name">
        <Box component="h4">{movie.tenPhim}</Box>
        <Box component="span">120 phút - 7.5 IMDb</Box>
      </Box>
    </Box>
  );
};

//////////// Refactor code with HOK /////////////
const useOnError = () => {
  const [error, setError] = useState(false);
  const handleLoadErrorImg = () => {
    setError(true);
  };
  return {
    error,
    onError: handleLoadErrorImg
  };
};

const useTrailer = (movie, viewTrailer) => {
  const handleViewTrailer = () => {
    const trailerMovie = {
      movie,
      isOpen: true
    };
    viewTrailer(trailerMovie);
  };
  return {
    onClick: handleViewTrailer
  };
};

/////////////////// Connect with redux ///////////////////
const mapDispatchToProps = dispatch => {
  return {
    viewTrailer: trailerMovie => {
      dispatch(actViewTrailer(trailerMovie));
    }
  };
};

export default connect(null, mapDispatchToProps)(Movie);
