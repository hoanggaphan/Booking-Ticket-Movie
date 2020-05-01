import React from "react";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import styles from "./style";

const WithBgSquares = (Component) => {
  const withBgSquares = ({ classes, ...props }) => (
    <Box
      className={classes.withFormBG}
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/dots.png')`,
        backgroundSize: "contain"
      }}
    >
      <Box className="squares square1"></Box>
      <Box className="squares square2"></Box>
      <Box className="squares square3"></Box>
      <Box className="squares square4"></Box>
      <Box className="squares square5"></Box>
      <Box className="squares square6"></Box>
      <Box className="squares square7"></Box>
      <Component {...props} />
    </Box>
  );
  withBgSquares.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf(["primary", "warning"]).isRequired,
    img: PropTypes.string,
  }
  return withStyles(styles)(withBgSquares);
};

export default WithBgSquares;
