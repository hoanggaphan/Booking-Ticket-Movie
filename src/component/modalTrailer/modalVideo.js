import React, { memo } from "react";
import { Modal, Box, IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { actViewTrailer } from "./../../redux/actions/index";
import MovieLoadError from "../movieLoadError/movieLoadError";

function ModalTrailer(props) {
  const { trailerMovie } = props;

  const handleClose = () => {
    const valid = {
      movie: {},
      isOpen: false
    };
    props.closeModal(valid);
  };

  return (
    <Box
      onClose={handleClose}
      display="flex"
      justifyContent="center"
      alignItems="center"
      component={Modal}
      open={trailerMovie.isOpen}
    >
      <Box
        position="relative"
        width="60%"
        height="60%"
        style={{ outline: "none" }}
      >
        {trailerMovie.movie.trailer ? (
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            src={trailerMovie.movie.trailer}
          ></iframe>
        ) : (
          <MovieLoadError movie={trailerMovie.movie} />
        )}
        <Box
          onClick={handleClose}
          component={IconButton}
          position="absolute"
          right="-30px"
          top="-30px"
        >
          <HighlightOffIcon style={{ fontSize: "40px" }} />
        </Box>
      </Box>
    </Box>
  );
}

const mapStateToProps = state => {
  return {
    trailerMovie: state.movieReducer.trailerMovie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: valid => {
      dispatch(actViewTrailer(valid));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(ModalTrailer));
