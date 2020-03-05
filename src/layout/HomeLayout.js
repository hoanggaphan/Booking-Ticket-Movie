import React from "react";
import Navbar from "./../component/navbar/navbar";
import { Box } from "@material-ui/core";

export default function HomeLayout(props) {
  return (
    <>
      <Navbar />
      <Box component="main" pt="65px">
        {props.children}
      </Box>
    </>
  );
}
