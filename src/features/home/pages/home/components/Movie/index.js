import { Box, Button, IconButton, Typography } from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import AgeType from "common/AgeType";
import RatingStar from "common/RatingStar";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actViewTrailer } from "redux/actions/movie";
import useStyles from "./Movie.styles";

const Movie = (props) => {
  const { movie, type } = props;

  const dispatch = useDispatch();
  const classes = useStyles(movie);

  const handleViewTrailer = () => {
    const trailer = {
      movie,
      isOpen: true,
    };
    dispatch(actViewTrailer(trailer));
  };

  return (
    <Box className={classes.card}>
      {/* BODY */}
      <Box className={classes.body}>
        <Box position="relative">
          <Box className={classes.body__background} />
        </Box>

        <Box
          component={Link}
          to={`/home/detail-movie/${movie.maPhim}`}
          width="100%"
          height="100%"
          position="absolute"
          top="0"
          left="0"
        ></Box>

        <Box className={classes.body__age}>
          <AgeType type="C18" />
        </Box>

        {type === "showing" && (
          <Box className={classes.body__starPoint}>
            <p>{movie.danhGia}</p>
            <Box>
              <RatingStar votes={movie.danhGia} xs />
            </Box>
          </Box>
        )}

        {type === "comming" && (
          <Box className={classes.body__date}>
            <Typography component="span" variant="h6">
              {new Date(movie.ngayKhoiChieu).getDate() +
                "/" +
                (new Date(movie.ngayKhoiChieu).getMonth() + 1)}
            </Typography>
          </Box>
        )}

        <Box
          className={classes.body__overplay}
          component={Link}
          to={`/home/detail-movie/${movie.maPhim}`}
        ></Box>

        <IconButton
          className={classes.body__playButton}
          onClick={handleViewTrailer}
        >
          <PlayCircleOutlineIcon />
        </IconButton>
      </Box>
      {/* END BODY */}

      {/* FOOTER */}
      <Box display={{ xs: "none", sm: "block" }} className={classes.footer}>
        <Box component="h4">{movie.tenPhim}</Box>
        <Box component="span">120 phút{type === "showing" && "- 7.5 IMDb"}</Box>

        {type === "showing" && (
          <Button
            className={classes.footer__bookButton}
            variant="contained"
            size="large"
            to={`/home/detail-movie/${movie.maPhim}`}
            component={Link}
          >
            MUA Vé
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Movie;
