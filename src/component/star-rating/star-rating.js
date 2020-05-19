import Box from "@material-ui/core/Box";
import star1 from "assets/images/star1.png";
import starNum from "assets/images/starNum.png";
import React from "react";
import useStyles from "./style";

export default function StarRating({ votes, ...props }) {
  const classes = useStyles(props);
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
