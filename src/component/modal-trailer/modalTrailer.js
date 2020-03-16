import React from "react";
import { Modal, Box, IconButton } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { connect } from "react-redux";
import { actViewTrailer as actCloseModal } from "../../redux/actions/index";
import MovieLoadError from "../movie-load-error/movieLoadError";
import useStyles from "./style";

function ModalTrailer(props) {
  const classes = useStyles();
  const { trailer, onCloseModal } = props;
  const modal = useModal(onCloseModal);

  return (
    <Box
      className={classes.modalTrailer}
      onClose={modal.handleOnCloseModal}
      component={Modal}
      open={trailer.isOpen}
    >
      <Box className="modal-trailer-wrap">
        {trailer.movie.trailer ? (
          <iframe
            auto
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            src={`${trailer.movie.trailer}?autoplay=1`}
            allow="autoplay"
            title={trailer.movie.tenPhim}
          ></iframe>
        ) : (
          <MovieLoadError movie={trailer.movie} />
        )}
        <Box
          onClick={modal.handleOnCloseModal}
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
const useModal = onCloseModal => {
  const handleOnCloseModal = () => {
    const valid = {
      isOpen: false
    };
    onCloseModal(valid);
  };
  return { handleOnCloseModal };
};

//////////// Connect with Redux ////////////////////
const mapStateToProps = state => {
  return {
    trailer: state.movieReducer.trailer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCloseModal: valid => {
      dispatch(actCloseModal(valid));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalTrailer);
