import React from "react";
import { Box, IconButton, Button, Typography } from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import StarRatings from "react-star-ratings";
import { actViewTrailer } from "../../redux/actions/index";
import useStyles from "./style";

const Movie = props => {
  const classes = useStyles();
  const { movie } = props;
  const trailer = useTrailer(props);

  return (
    <Box className={classes.movie}>
      <Box
        className="movie-background"
        style={ !movie.hinhAnh ? { backgroundImage: 'url("load-error.jpg")' } : { backgroundImage: `url(${movie.hinhAnh})` } }
      >
        {/* LINK DETAIL MOVIE IN MOBILE */}
        <Box component={Link} to={`/detail-movie/${movie.maPhim}`} width="100%" height="100%" position="absolute" top="0" left="0" ></Box>

        {/* AGE TYPES */}
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
        
        {/* STAR RATING */}
        <Box className="movie-starpoint">
          <Typography component="span" variant="h6">
            {movie.danhGia ? movie.danhGia : 0}
          </Typography>
          <StarRatings
            rating={movie.danhGia ? movie.danhGia / 2 : 0}
            starRatedColor="red"
            starSpacing="0px"
          />
        </Box>
        
        {/* OVERPLAY */}
        <Box component={Link} to={`/detail-movie/${movie.maPhim}`} className="movie-overplay">
        </Box>
        
        {/* PLAY BUTTON */}
        <IconButton {...trailer} className="movie-play-btn">
          <PlayCircleOutlineIcon/>
        </IconButton>    
      </Box>

      {/* DETAIL MOVIE IN WEB */}
      <Box display={{ xs: "none", sm: "block" }} className="movie-name">
        <Box component="h4">{movie.tenPhim}</Box>
        <Box component="span">120 phút - 7.5 IMDb</Box>
        <Button
            className="movie-book-btn"
            variant="contained"
            size="large"
            to={`/detail-movie/${movie.maPhim}`}
            component={Link}
          >
            Đặt Vé
          </Button>
      </Box>
    </Box>
  );
};

//////////// Refactor code with HOK /////////////
const useTrailer = ({ movie, viewTrailer }) => {
  const handleViewTrailer = () => {
    const trailer = {
      movie,
      isOpen: true
    };
    viewTrailer(trailer);
  };
  return {
    onClick: handleViewTrailer
  };
};

/////////////////// Connect with redux ///////////////////
const mapDispatchToProps = dispatch => {
  return {
    viewTrailer: trailer => {
      dispatch(actViewTrailer(trailer));
    }
  };
};

export default connect(null, mapDispatchToProps)(Movie);
