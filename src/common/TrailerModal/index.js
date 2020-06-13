import { Box, IconButton, Modal } from "@material-ui/core";
import { HighlightOff } from "@material-ui/icons";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actViewTrailer as actCloseModal } from "redux/actions/movie";
import useStyles from "./TrailerModal.styles";

function TrailerModal() {
  const dispatch = useDispatch();
  const trailer = useSelector((state) => state.movieReducer.trailer);
  const classes = useStyles();

  const handleOnCloseModal = () => {
    const valid = {
      isOpen: false,
    };
    dispatch(actCloseModal(valid));
  };

  return (
    <Box
      className={classes.modalTrailer}
      onClose={handleOnCloseModal}
      component={Modal}
      open={trailer.isOpen}
    >
      <Box className="modal-trailer-wrap">
        <iframe
          loading="lazy"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          src={`${trailer.movie.trailer}?autoplay=1`}
          allow="autoplay"
          title={trailer.movie.tenPhim}
        />
        <Box
          onClick={handleOnCloseModal}
          component={IconButton}
          className="modal-trailer-close-icon"
        >
          <HighlightOff className={classes.Highlight} />
        </Box>
      </Box>
    </Box>
  );
}

export default memo(TrailerModal);
