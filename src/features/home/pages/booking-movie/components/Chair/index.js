import { Box } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import Skeleton from "@material-ui/lab/Skeleton";
import { useSnackbar } from "notistack";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actAddChairBooking, actClearListBooking, actRemoveChairBooking } from "redux/actions/booking";
import useStyles from "./styles";

function Chair({ chair }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const listBooking = useSelector((state) => state.bookingReducer.listBooking);

  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const findIndexChairBooking = () => {
    return listBooking.findIndex((item) => item.maGhe === chair.maGhe);
  };

  const handleClick = (index) => {
    if (user) {
      if (listBooking.length === 3 && index < 0) {
        const message = "Không được chọn quá 3 ghế";
        enqueueSnackbar(message, { variant: "warning" });
      } else {
        if (index > -1) {
          dispatch(actRemoveChairBooking(index));
        } else {
          dispatch(actAddChairBooking(chair));
        }
      }
    }
  };

  useEffect(() => {
    return () => dispatch(actClearListBooking());
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

export default Chair;
