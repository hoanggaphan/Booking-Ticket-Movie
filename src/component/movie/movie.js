import React, { useState } from "react";
import { Box, Typography, IconButton } from "@material-ui/core";
import { MainButton } from "./../../styles/button";
import { Link } from "react-router-dom";
import useStyles from "./style";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { connect } from "react-redux";
import { actViewTrailer } from "./../../redux/actions/index";

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
        <img
          src={!error ? movie.hinhAnh : "load-error.jpg"}
          alt={movie.tenPhim}
          className={classes.imgMovie}
          onError={() => {
            console.log(123);
            setError(true);
          }}
        />

        <Box className={classes.overPlay}>
          <IconButton onClick={handleViewTrailer}>
            <PlayCircleOutlineIcon className={classes.playIcon} />
          </IconButton>
        </Box>
      </Box>
      <Typography
        className={classes.nameMovie}
        component="h4"
        variant="h6"
      >
        {movie.tenPhim}
      </Typography>
      <MainButton
        className={classes.btnBook}
        size="large"
        to="#"
        component={Link}
      >
        Đặt Vé
      </MainButton>
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
