import Box from "@material-ui/core/Box";
import star1 from "assets/images/star1.png";
import starNum from "assets/images/starNum.png";
import React from "react";
import useStyles from "./RatingStar.styles";
import PropTypes from "prop-types";

RatingStar.propsTypes = {
  votes: PropTypes.number,
  xs: PropTypes.shape({
    star1: PropTypes.string.isRequired,
    star2: PropTypes.string.isRequired,
  }),
  sm: PropTypes.shape({
    star1: PropTypes.string.isRequired,
    star2: PropTypes.string.isRequired,
  }),
  md: PropTypes.shape({
    star1: PropTypes.string.isRequired,
    star2: PropTypes.string.isRequired,
  }),
  lg: PropTypes.shape({
    star1: PropTypes.string.isRequired,
    star2: PropTypes.string.isRequired,
  }),
};

RatingStar.defaultProps = {
  votes: 10,
};

export default function RatingStar(props) {
  const classes = useStyles(props);
  const { votes } = props;
  const number = votes && votes > -1 && votes < 11 ? votes : 0;

  return (
    <Box className={classes.root}>
      {[...Array(parseInt(number / 2))].map((item, index) => (
        // eslint-disable-next-line
        <img src={star1} key={index} className="star1" />
      ))}

      {number % 2 !== 0 && (
        <img src={starNum} className="starNum" alt="star 2" />
      )}
    </Box>
  );
}
