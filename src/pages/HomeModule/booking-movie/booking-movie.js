import React, { useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { connect } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';

import useStyles from "./style";
import { actGetRoomInfo } from "./../../../redux/actions/index";
import Timer from "./../../../component/timer/timer";
import ChairList from "./../../../component/chair-list/chair-list";
import Payment from "../../../component/payment/payment";

function BookingMovie(props) {
  const classes = useStyles();
  const { getRoomInfo, isFetching, roomInfo, user, open } = props;
  const { maLichChieu } = useParams();
  const history = useHistory();

  useEffect(() => {
    getRoomInfo(maLichChieu);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!user) {
      history.push("/user/login");
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <Box className={classes.root}>
        <Grid item xs={12} md={9} className="room-box">
          <Box className="info-box">
            <Box>
              {!isFetching ? (
                <>
                  <Box display="flex">
                    <h6 className="title">Tên rạp:</h6>
                    <span className="text">
                      <span className="cinema-name">
                        {roomInfo.thongTinPhim.tenCumRap.split("-")[0]}
                      </span>
                      - {roomInfo.thongTinPhim.tenCumRap.split("-")[1]}
                    </span>
                  </Box>
                  <Box display="flex">
                    <h6 className="title">Địa chỉ:</h6>
                    <span className="text text-location">
                      {roomInfo.thongTinPhim.diaChi}
                    </span>
                  </Box>
                  <Box display="flex">
                    <h6 className="title">Thời gian:</h6>
                    <span className="text">
                      {roomInfo.thongTinPhim.ngayChieu.split("/")[0]}/
                      {roomInfo.thongTinPhim.ngayChieu.split("/")[1]} -{" "}
                      {roomInfo.thongTinPhim.gioChieu} -{" "}
                      {roomInfo.thongTinPhim.tenRap}
                    </span>
                  </Box>
                </>
              ) : (
                <>
                  <Skeleton variant="text" width="320px" />
                  <Skeleton variant="text" width="320px" />
                  <Skeleton variant="text" width="250px" />
                </>
              )}
            </Box>
            <Box className="timer-box">
              <Timer seconds={300} />
            </Box>
          </Box>
          <Box className="tivi-box">
            <Box className="tivi-component"></Box>
            <Box className="tivi-shadow">
              <p>Màn hình</p>
            </Box>
          </Box>
          <ChairList />
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={`pay-box ${open && "open"}`}>
          <Payment />
        </Grid>
    </Box>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRoomInfo: (maLichChieu) => {
      dispatch(actGetRoomInfo(maLichChieu));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.bookingReducer.isFetching,
    roomInfo: state.bookingReducer.roomInfo,
    user: state.userReducer.user,
    open: state.bookingReducer.open
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingMovie);
