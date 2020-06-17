import React, { memo } from "react";
import { Grid, Box } from "@material-ui/core";
import useStyles from "./Detail.styles";
import PropTypes from "prop-types";

Detail.propTypes = {
  movieDetail: PropTypes.object.isRequired,
};

function Detail({ movieDetail }) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Box display="flex">
          <Box component="p" className={classes.detailTitle}>
            Ngày phát hành
          </Box>
          <Box component="p" className={classes.detailInfo}>
            <>{movieDetail.ngayKhoiChieu}</>
          </Box>
        </Box>
        <Box display="flex">
          <Box component="p" className={classes.detailTitle}>
            Đạo diễn
          </Box>
          <Box component="p" className={classes.detailInfo}>
            Dave Wilson
          </Box>
        </Box>
        <Box display="flex">
          <Box component="p" className={classes.detailTitle}>
            Diễn viên
          </Box>
          <Box component="p" className={classes.detailInfo}>
            Toby Kebbell, Eiza González, Vin Diesel
          </Box>
        </Box>
        <Box display="flex">
          <Box component="p" className={classes.detailTitle}>
            Thể Loại
          </Box>
          <Box component="p" className={classes.detailInfo}>
            hành động
          </Box>
        </Box>
        <Box display="flex">
          <Box component="p" className={classes.detailTitle}>
            Định dạng
          </Box>
          <Box component="p" className={classes.detailInfo}>
            2D/Digital
          </Box>
        </Box>
        <Box display="flex">
          <Box component="p" className={classes.detailTitle}>
            Quốc Gia SX
          </Box>
          <Box component="p" className={classes.detailInfo}>
            Mỹ
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box component="p" className={classes.detailTitle}>
          Nội dung
        </Box>
        <Box component="p" className={classes.detailContent}>
          {movieDetail.moTa}
        </Box>
      </Grid>
    </Grid>
  );
}

export default memo(Detail);
