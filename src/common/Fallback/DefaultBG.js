import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    background: theme.palette.background.default,
  },
}));

export default function DefaultBG() {
  const classes = useStyles();

  return <div className={classes.root}></div>;
}
