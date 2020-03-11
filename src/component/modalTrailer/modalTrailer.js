import React from "react";
import { Modal, Box, IconButton } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { connect } from "react-redux";
import { actViewTrailer as actCloseModal } from "../../redux/actions/index";
import MovieLoadError from "../movieLoadError/movieLoadError";
import useStyles from "./style";

function ModalTrailer(props) {
  const classes = useStyles();
  const { trailerMovie, closeModal } = props;
  const unModal = useCloseModal(closeModal);

  return (
    <Box
      className={classes.modalTrailer}
      onClose={unModal.onClose}
      component={Modal}
      open={trailerMovie.isOpen}
    >
      <Box className="modal-trailer-wrap">
        {trailerMovie.movie.trailer ? (
          <iframe
            auto
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            src={`${trailerMovie.movie.trailer}?autoplay=1`}
            allow="autoplay"
            title={trailerMovie.movie.tenPhim}
          ></iframe>
        ) : (
          <MovieLoadError movie={trailerMovie.movie} />
        )}
        <Box
          onClick={unModal.onClick}
          component={IconButton}
          className="modal-trailer-close-icon"
        >
          <HighlightOffIcon style={{ fontSize: "40px" }} />
        </Box>
      </Box>
    </Box>
  );
}

//////////// Refactor code with HOOK ////////////////
const useCloseModal = closeModal => {
  const handleCloseModal = () => {
    const valid = {
      isOpen: false
    };
    closeModal(valid);
  };
  return {
    onClose: handleCloseModal,
    onClick: handleCloseModal
  };
};

//////////// Connect with Redux ////////////////////
const mapStateToProps = state => {
  return {
    trailerMovie: state.movieReducer.trailerMovie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: valid => {
      dispatch(actCloseModal(valid));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalTrailer);
