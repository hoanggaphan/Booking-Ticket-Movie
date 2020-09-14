import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useStyles from './layout.styles';
import Routes from "./routes/Routes";

export default function UserLayout() {
  const { pathname } = useLocation();
  const [color, setColor] = useState("default.main");
  const classes = useStyles();

  useEffect(() => {
    let name  = pathname.split("/").pop();
    if(name === "login") {
      return setColor("primary.main");
    } 
    if(name === "register") {
      return setColor("warning.main");
    }
  }, [pathname])

  return (
    <Box className={classes.layout}>
      <Box className="squares square1" bgcolor={color} />
      <Box className="squares square2" bgcolor={color} />
      <Box className="squares square3" bgcolor={color} />
      <Box className="squares square4" bgcolor={color} />
      <Box className="squares square5" bgcolor={color} />
      <Box className="squares square6" bgcolor={color} />
      <Box className="squares square7" bgcolor={color} />
      <Routes />
    </Box>
  );
}
