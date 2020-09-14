import Box from "@material-ui/core/Box";
import dots from "assets/images/dots.png";
import MyFooter from "common/Footer";
import Navbar from "common/Navbar";
import React from "react";
import Routes from "./routes/Routes";

const style = {
  backgroundImage: `url(${dots})`,
  backgroundSize: "contain",
  overflow: "hidden",
};

function HomeLayout() {
  return (
    <Box style={style}>
      <Navbar />
      <Box component="main" pt="65px">
        <Routes />
      </Box>
      <MyFooter />
    </Box>
  );
}

export default HomeLayout;
