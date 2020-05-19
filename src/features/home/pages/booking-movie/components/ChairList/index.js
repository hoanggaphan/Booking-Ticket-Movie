import { Box, Button, Grid } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Chair from "features/home/pages/booking-movie/components/Chair";
import React from "react";
import { connect } from "react-redux";
import { actOpenPaymentBox } from "redux/actions/booking";
import useStyles from "./styles";

function ChairList(props) {
  const classes = useStyles();
  const { roomInfo, listBooking, openPaymentBox, isFetching } = props;

  const validateNextBtn = () => {
    return listBooking.length < 1; // mảng < 1 là true
  };

  return (
    <Box component={Grid} item xs={12} sm={10} m="auto!important">
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        {(isFetching ? [...Array(160)] : roomInfo.danhSachGhe).map(
          (item, index) => (
            <Chair chair={item} key={index} />
          )
        )}
      </Box>
      <Box mt="15px" textAlign="center" display={{ xs: "block", md: "none" }}>
        <Button
          disabled={validateNextBtn()}
          className={classes.nextBtn}
          onClick={() => openPaymentBox(true)}
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

const mapStateToProps = (state) => ({
  roomInfo: state.bookingReducer.roomInfo,
  listBooking: state.bookingReducer.listBooking,
  isFetching: state.bookingReducer.isFetching,
});

const mapDispatchToProps = (dispatch) => {
  return {
    openPaymentBox: (status) => {
      dispatch(actOpenPaymentBox(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChairList);
