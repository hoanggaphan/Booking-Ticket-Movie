import React from "react";
import { Box, IconButton, Button, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actViewTrailer } from "../../redux/actions/index";
import AgeType from "./../age-type/age-type";
import useStyles from "./style";
import StarRating from "../star-rating/star-rating";

const Movie = props => {
  const classes = useStyles();
  const { movie, type } = props;
  
  const handleViewTrailer = () => {
    const trailer = {
      movie,
      isOpen: true
    };
    props.viewTrailer(trailer);
  };

  return (
    <Box className={classes.movie}>
      <Box className="movie-wrapper">
        {movie ? (
          <Box position="relative">
            <Box
              className="movie-background"
              style={
                !movie.hinhAnh
                  ? { backgroundImage: 'url("load-error.jpg")' }
                  : { backgroundImage: `url(${movie.hinhAnh})` }
              }
            />
            <Box
              position="absolute"
              top="0"
              left="0"
              className="movie-background"
              zIndex="-2"
              style={{ backgroundImage: 'url("load-error.jpg")' }}
              borderRadius="5px"
            />
          </Box>
        ) : (
          <Box
            component={Skeleton}
            variant="rect"
            paddingTop="150%"
            animation="pulse"
          />
        )}

        {/* LINK DETAIL MOVIE IN MOBILE */}
        {movie && (
          <Box
            component={Link}
            to={`/detail-movie/${movie.maPhim}`}
            width="100%"
            height="100%"
            position="absolute"
            top="0"
            left="0"
          ></Box>
        )}

        {/* AGE TYPES */}
        {movie && (
          <Box className="movie-age">
            <AgeType type="C18" />
          </Box>
        )}

        {/* STAR RATING */}
        {movie && type === "showing" && (
          <Box className="movie-starpoint">
            <p >{movie.danhGia}</p>
            <Box>
              <StarRating votes={movie.danhGia} xs />
            </Box>
          </Box>
        )}
        {/* DATE COMMING */}
        {movie && type === "comming" && (
          <Box className="movie-date" style={{ lineHeight: "1.6" }}>
            <Typography component="span" variant="h6">
              {new Date(movie.ngayKhoiChieu).getDate() +
                "/" +
                (new Date(movie.ngayKhoiChieu).getMonth() + 1)}
            </Typography>
          </Box>
        )}

        {/* OVERPLAY */}
        {movie && (
          <Box
            component={Link}
            to={`/detail-movie/${movie.maPhim}`}
            className="movie-overplay"
          ></Box>
        )}

        {/* PLAY BUTTON */}
        {movie && (
          <IconButton onClick={handleViewTrailer} className="movie-play-btn">
            <PlayCircleOutlineIcon />
          </IconButton>
        )}
      </Box>

      {/* DETAIL MOVIE IN WEB */}
      <Box display={{ xs: "none", sm: "block" }} className="movie-name">
        {movie ? (
          <>
            <Box component="h4">{movie.tenPhim}</Box>
            <Box component="span">
              120 phút{type === "showing" && "- 7.5 IMDb"}
            </Box>
          </>
        ) : (
          <>
            <Box component={Skeleton} variant="text" />
            <Box component={Skeleton} variant="text" width="75%" />
          </>
        )}
        {movie && type === "showing" && (
          <Button
            className="movie-book-btn"
            variant="contained"
            size="large"
            to={`/detail-movie/${movie.maPhim}`}
            component={Link}
          >
            MUA Vé
          </Button>
        )}
      </Box>
    </Box>
  );
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
