import { Box, IconButton } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/styles";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .timer-text": {
      fontWeight: "500",
      fontSize: "15px",
      marginBottom: "0",
    },
    "& .timer-num": {
      fontWeight: "500",
      fontSize: "30px",
      color: theme.palette.text.warning,
      textAlign: "center",
    },
  },
  skeleton: {
    margin: "auto",
  },
  iconSnack: {
    color: "white",
    outline: "unset",
  },
}));

function Timer(props) {
  const roomInfo = useSelector((state) => state.bookingReducer.roomInfo);

  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const history = useHistory();

  const [counter, setCounter] = useState(props.seconds);
  const minutes = parseInt(counter / 60);
  const seconds = counter % 60;

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
      if (counter === 59) {
        const message = "Sắp hết thời gian đặt ghế";
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
      }
    } else if (counter === 0) {
      history.goBack();
    }
    // eslint-disable-next-line
  }, [counter]);

  return (
    <Box className={classes.root}>
      {roomInfo ? (
        <>
          <h6 className="timer-text">Thời gian giữ ghế</h6>
          <Box className="timer-num">
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </Box>
        </>
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
  );
}

export default Timer;
