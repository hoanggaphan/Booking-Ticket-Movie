import { Box } from "@material-ui/core";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./Timer.styles";

Timer.propTypes = {
  seconds: PropTypes.number,
};

Timer.defaultProps = {
  seconds: 60,
};

function Timer(props) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const [counter, setCounter] = useState(props.seconds);
  const minutes = parseInt(counter / 60);
  const seconds = counter % 60;

  useEffect(() => {
    const clockTimeout = setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 59) {
      const message = "Sắp hết thời gian đặt ghế";
      enqueueSnackbar(message, { variant: "warning" });
    } else if (counter <= 0) {
      history.goBack();
    }

    return () => {
      clearTimeout(clockTimeout);
    };
    // eslint-disable-next-line
  }, [counter]);

  return (
    <Box className={classes.root}>
      <h6 className="timer-text">Thời gian giữ ghế</h6>
      <Box className="timer-num">
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </Box>
    </Box>
  );
}

export default Timer;
