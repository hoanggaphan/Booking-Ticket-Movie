import { Box, IconButton } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import Skeleton from "@material-ui/lab/Skeleton";
import { useSnackbar } from "notistack";
import React, { memo, useEffect } from "react";
import { connect } from "react-redux";
import {
  actAddChairBooking,
  actClearListBooking,
  actRemoveChairBooking,
} from "redux/actions";
import useStyles from "./styles";

function Chair({ chair, ...props }) {
  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const {
    listBooking,
    addChairBooking,
    removeChairBooking,
    clearListBooking,
    user,
  } = props;

  const findIndexChairBooking = () => {
    return listBooking.findIndex((item) => item.maGhe === chair.maGhe);
  };

  const handleClick = (index) => {
    if (user) {
      if (listBooking.length === 3 && index < 0) {
        const message = "Không được chọn quá 3 ghế";
        enqueueSnackbar(message, {
          variant: "warning",
          anchorOrigin: { vertical: "top", horizontal: "center" },
          action: (key) => (
            <IconButton
              className={classes.iconSnack}
              onClick={() => closeSnackbar(key)}
            >
              <Close />
            </IconButton>
          ),
        });
      } else {
        if (index > -1) {
          removeChairBooking(index);
        } else {
          addChairBooking(chair);
        }
      }
    }
  };

  useEffect(() => {
    return () => clearListBooking();
    // eslint-disable-next-line
  }, []);

  const validateChair = () => {
    const index = findIndexChairBooking();
    if (chair.loaiGhe === "Thuong" && chair.daDat) {
      return (
        <Box className={`${classes.normal} ${classes.selected}`}>
          <Close className={classes.icon} />
        </Box>
      );
    } else if (chair.loaiGhe === "Thuong") {
      if (index > -1) {
        return (
          <Box
            className={classes.selecting}
            onClick={() => handleClick(index)}
          />
        );
      }
      return (
        <Box className={classes.normal} onClick={() => handleClick(index)} />
      );
    } else if (chair.loaiGhe === "Vip" && chair.daDat) {
      return (
        <Box className={`${classes.vip} ${classes.selected}`}>
          <Close className={classes.icon} />
        </Box>
      );
    } else if (chair.loaiGhe === "Vip") {
      if (index > -1) {
        return (
          <Box
            className={classes.selecting}
            onClick={() => handleClick(index)}
          />
        );
      }
      return <Box className={classes.vip} onClick={() => handleClick(index)} />;
    }
  };
  return (
    <>
      {chair ? (
        validateChair()
      ) : (
        <Skeleton
          variant="circle"
          width="calc(100%/14 - 1%)"
          className={classes.skeleton}
        />
      )}
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addChairBooking: (chairInfo) => {
    dispatch(actAddChairBooking(chairInfo));
  },
  removeChairBooking: (chairInfo) => {
    dispatch(actRemoveChairBooking(chairInfo));
  },
  clearListBooking: () => {
    dispatch(actClearListBooking());
  },
});

const mapStateToProps = (state) => ({
  listBooking: state.bookingReducer.listBooking,
  user: state.userReducer.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Chair));
