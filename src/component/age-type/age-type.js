import React from "react";
import useStyles from "./style";

export default function AgeType({type, ...props}) {
  const classes = useStyles(props);

  return (
    <span className={classes.root}>
      {type}
    </span>
  );
}
