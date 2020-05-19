import React from "react";
import useStyles from "./styles";

export default function AgeType({ type, ...props }) {
  const classes = useStyles(props);

  return <span className={classes.root}>{type}</span>;
}
