import { Box, Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import Timer from "common/Timer";
import ChairList from "features/home/pages/booking-movie/components/ChairList";
import Payment from "features/home/pages/booking-movie/components/Payment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { actGetRoomInfo } from "redux/actions/booking";
import useStyles from "./styles";

function BookingMoviePage() {
  const dispatch = useDispatch();
  const roomInfo = useSelector((state) => state.bookingReducer.roomInfo);
  const user = useSelector((state) => state.userReducer.user);
  const open = useSelector((state) => state.bookingReducer.open);

  const classes = useStyles();
  const { maLichChieu } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(actGetRoomInfo(maLichChieu));
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
            {roomInfo ? (
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
            {roomInfo ? (
              <Timer seconds={300} />
            ) : (
              <>
                <Skeleton variant="text" width="120px" height="20px" />
                <Skeleton
                  className={classes.skeleton}
                  variant="text"
                  width="100px"
                  height="40px"
                />
              </>
            )}
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

export default BookingMoviePage;
