import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "./style";

export default function StarRating({ votes, ...props }) {
  const classes = useStyles(props);
  const number = votes && votes > -1 && votes < 11 ? votes : 0;
  return (
    <Box className={classes.root}>
      {[...Array(parseInt(number / 2))].map((item, index) => (
        // eslint-disable-next-line
        <img
          src={`${process.env.PUBLIC_URL}/star1.png`}
          key={index}
          className="star1"
        />
      ))}
      {number % 2 !== 0 && (
        <img
          src={`${process.env.PUBLIC_URL}/starNum.png`}
          className="starNum"
          alt="star 2"
        />
      )}
    </Box>
  );
}
