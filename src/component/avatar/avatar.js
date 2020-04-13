import React from "react";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: "33px",
    height: "33px",
    backgroundColor: "white",
    fontWeight: "600",
  },
});

export default function MyAvatar({ user }) {
  const classes = useStyles();
  return (
    <Avatar
      className={classes.root} alt={user && user.hoTen} src={user && user.hinhAnh}>
      {user && user.hoTen.slice(0, 1).toUpperCase()}
    </Avatar>
  );
}
