import React from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Box, Typography, IconButton, Link } from "@material-ui/core";

export default function MovieLoadError(props) {
  const {movie} = props;
  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="100%"
      bgcolor="rgba(0 ,0 ,0 , .9)"
      position="relative"
    >
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
        >
          <YouTubeIcon style={{ fontSize: "60px" }} />
        </Link>
      </Box>
    </Box>
  );
}
