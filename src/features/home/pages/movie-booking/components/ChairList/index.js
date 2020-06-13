import { Box, Button, Grid } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Chair from "../Chair";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actOpenPaymentBox } from "redux/actions/booking";
import useStyles from "./ChairList.styles";

function ChairList() {
  const dispatch = useDispatch();
  const roomInfo = useSelector((state) => state.bookingReducer.roomInfo);
  const listBooking = useSelector((state) => state.bookingReducer.listBooking);
  const classes = useStyles();

  const validateNextBtn = () => {
    return listBooking.length < 1; // mảng < 1 là true
  };

  return (
    <Box component={Grid} item xs={12} sm={10} m="auto!important">
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        {(!roomInfo ? [...Array(160)] : roomInfo.danhSachGhe).map(
          (item, index) => (
            <Chair chair={item} key={index} />
          )
        )}
      </Box>
      <Box mt="15px" textAlign="center" display={{ xs: "block", md: "none" }}>
        <Button
          disabled={validateNextBtn()}
          className={classes.nextBtn}
          onClick={() => dispatch(actOpenPaymentBox(true))}
        >
          Kế Tiếp
        </Button>
      </Box>
      <Box className={classes.types}>
        <Box className="type-box">
          <Box className="type normal" />
          <span>Ghế thường</span>
        </Box>
        <Box className="type-box">
          <Box className="type normal-selected">
            <CloseIcon />
          </Box>
          <span>Ghế thường đã có người đặt</span>
        </Box>
        <Box className="type-box">
          <Box className="type selecting" />
          <span>Ghế đang chọn</span>
        </Box>
        <Box className="type-box">
          <Box className="type vip" />
          <span>Ghế VIP</span>
        </Box>
        <Box className="type-box">
          <Box className="type vip-selected">
            <CloseIcon />
          </Box>
          <span>Ghế VIP đã có người đặt</span>
        </Box>
        <Box className="type-box">
          <Box className="type selecting-other" />
          <span>Ghế có người khác đang chọn</span>
        </Box>
      </Box>
    </Box>
  );
}

export default ChairList;
