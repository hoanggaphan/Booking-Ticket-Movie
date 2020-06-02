import { Box, IconButton, Link, Modal, Typography } from "@material-ui/core";
import { ErrorOutline, HighlightOff, YouTube } from "@material-ui/icons";
import React from "react";
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
        {trailer.movie.trailer ? (
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
        ) : (
          <Box className={classes.trailerNull}>
            <Box mx="20px 10px">
              <ErrorOutline className={classes.iconError} />
            </Box>
            <Box maxWidth="600px">
              <Typography component="span" variant="h4">
                Đã xảy ra lỗi. Vui lòng thử lại sau. (Mã lượt phát:{" "}
                {trailer.movie.maPhim})
                <Typography
                  href="https://support.google.com/youtube/answer/3037019?visit_id=637188399539876760-3981321229&p=player_error1&hl=vi&rd=1"
                  target="__blank"
                  variant="h4"
                  color="textPrimary"
                  component={Link}
                  rel="noopener noreferrer"
                  className="movie-error-link"
                >
                  Tìm Hiểu Thêm
                </Typography>
              </Typography>
            </Box>
            <Box position="absolute" bottom="15px" right="15px">
              <Link
                component={IconButton}
                href="https://www.youtube.com/"
                target="__blank"
                rel="noopener noreferrer"
                className="movie-error-link"
              >
                <YouTube className={classes.iconYoutube} />
              </Link>
            </Box>
          </Box>
        )}
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

export default TrailerModal;
