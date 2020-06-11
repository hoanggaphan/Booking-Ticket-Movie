import React from "react";
import PropTypes from "prop-types";
import useStyles from "./Sticker.styles";

Sticker.propTypes = {
  text: PropTypes.string.isRequired,

  color: PropTypes.string,
  fontSize: PropTypes.string,
};

Sticker.defaultProps = {
  color: "warning",
  fontSize: "14px",
};

function Sticker({ text, ...props }) {
  const classes = useStyles(props);

  return <span className={classes.sticker}>{text}</span>;
}

export default Sticker;
