import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import styles from "./WithBgSquares.styles";

const WithBgSquares = (Component) => {
  const withBgSquares = ({ classes, ...props }) => (
    <Box className={classes.withFormBG}>
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
  return withStyles(styles)(withBgSquares);
};

export default WithBgSquares;
