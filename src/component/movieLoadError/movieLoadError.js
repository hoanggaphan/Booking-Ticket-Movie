import React from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Box, Typography, IconButton, Link } from "@material-ui/core";
import useStyles from "./style";

const MovieLoadError = props => {
  const classes = useStyles();

  const { movie } = props;
  return (
    <Box className={classes.movieError}>
      <Box mx="20px 10px">
        <ErrorOutlineIcon style={{ fontSize: "100px" }} />
      </Box>
      <Box maxWidth="600px">
        <Typography component="span" variant="h4">
          Đã xảy ra lỗi. Vui lòng thử lại sau. (Mã lượt phát: {movie.maPhim})
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
          <YouTubeIcon style={{ fontSize: "60px" }} />
        </Link>
      </Box>
    </Box>
  );
};

export default MovieLoadError;
