import React from "react";
import Navbar from "./../component/navbar/navbar";
import { Box } from "@material-ui/core";
import MyFooter from "../component/footer/footer";

export default function HomeLayout(props) {

  return (
    <Box style={{backgroundImage: "url('dots.png')", backgroundSize: "contain"}}>
      <Navbar />
      <Box component="main" pt="65px" overflow="hidden" >
        {props.children}
      </Box>
      <MyFooter/>
    </Box>
  );
}
