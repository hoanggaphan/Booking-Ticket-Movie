import { Box, Button, FormControl, FormControlLabel, IconButton, Radio, RadioGroup } from "@material-ui/core";
import { AccountBalance, Close, CreditCard } from "@material-ui/icons";
import Skeleton from "@material-ui/lab/Skeleton";
import momo from "assets/images/momo-logo.jpg";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { actBookingChair, actOpenPaymentBox } from "redux/actions/booking";
import useStyles from "./Payment.styles";

function Payment() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const roomInfo = useSelector((state) => state.bookingReducer.roomInfo);
  const listBooking = useSelector((state) => state.bookingReducer.listBooking);
  const user = useSelector((state) => state.userReducer.user);

  const history = useHistory();
  const { maLichChieu } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [value, setValue] = useState("momo");

  const sum = listBooking.reduce((sum, item) => sum + item.giaVe, 0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handlePayment = () => {
    if (user) {
      if (listBooking.length > 0) {
        const danhSachVe = listBooking.reduce((arr, item) => {
          return (arr = [...arr, { maGhe: item.maGhe, giaVe: item.giaVe }]);
        }, []);
        const info = {
          maLichChieu,
          danhSachVe,
          taiKhoanNguoiDung: user.taiKhoan,
        };
        const token = user.accessToken;
        dispatch(actBookingChair(info, token, history, enqueueSnackbar));
      } else {
        const message = "Phải chọn ít nhất 1 ghế";
        enqueueSnackbar(message, { variant: "warning" });
      }
    }
  };

  return (
    <Box className={classes.root}>
      <Box display={{ xs: "flex", md: "none" }} justifyContent="flex-end">
        <IconButton
          onClick={() => dispatch(actOpenPaymentBox(false))}
          className="icon"
        >
          <Close />
        </IconButton>
      </Box>
      {roomInfo ? (
        <>
          <h5 className="movie-name">{roomInfo.thongTinPhim.tenPhim}</h5>
          <Box className="cinema-name">
            <span className="name-color">
              {roomInfo.thongTinPhim.tenCumRap.split("-")[0]}
            </span>{" "}
            -{roomInfo.thongTinPhim.tenCumRap.split("-")[1]}
          </Box>
          <Box className="cinema-location">{roomInfo.thongTinPhim.diaChi}</Box>
          <Box className="date-time">
            {roomInfo.thongTinPhim.ngayChieu.split("/")[0]}/
            {roomInfo.thongTinPhim.ngayChieu.split("/")[1]} -{" "}
            {roomInfo.thongTinPhim.gioChieu} - {roomInfo.thongTinPhim.tenRap}
          </Box>
        </>
      ) : (
        <>
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="70%" />
        </>
      )}
      <Box className="price-box">
        <Box className="chair-box">
          <Box className="chair-amount">
            Ghế x <span>{listBooking.length}</span>
          </Box>
          <Box className="price">{sum.toLocaleString()} đ</Box>
        </Box>
      </Box>
      <Box className="payments-box">
        <h5>Hình thức thanh toán</h5>
        <FormControl component="fieldset" className="payment-form">
          <RadioGroup
            aria-label="payment-group"
            className="payment-group"
            value={value}
            onChange={handleChange}
          >
            <Box className="payment-control">
              <FormControlLabel
                value="momo"
                control={<Radio color="default" />}
              />
              <img src={momo} alt="momo" className="payment-icon" />
              <span>Thanh toán qua MoMo</span>
            </Box>
            <Box className="payment-control">
              <FormControlLabel
                value="visa"
                control={<Radio color="default" />}
              />
              <CreditCard className="payment-icon" />
              <span>Thanh toán qua Visa</span>
            </Box>
            <Box className="payment-control">
              <FormControlLabel
                value="atm"
                control={<Radio color="default" />}
              />
              <AccountBalance className="payment-icon" />
              <span>Thanh toán qua ATM</span>
            </Box>
          </RadioGroup>
          <Button
            variant="contained"
            className="pay-btn"
            onClick={handlePayment}
          >
            Thanh Toán
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
}

export default Payment;
