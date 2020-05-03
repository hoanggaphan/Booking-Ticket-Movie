import React from "react";
import Box from "@material-ui/core/Box";
import { Route, Redirect } from "react-router-dom";

import Navbar from "./../component/navbar/navbar";
import MyFooter from "../component/footer/footer";

const style = {
  backgroundImage: `url('${process.env.PUBLIC_URL}/images/dots.png')`,
  backgroundSize: "contain",
  overflow: "hidden",
};

function HomeLayout(props) {
  return (
    <Box style={style}>
      <Navbar />
      <Box component="main" pt="65px">
        {props.children}
      </Box>
      <MyFooter />
    </Box>
  );
}

export default function HomeTemplate({ component: Component, path, ...props }) {
  return (
    <Route
      {...props}
      render={({ location }) => {
        if (
          path === "/booking-movie/:maLichChieu" &&
          !localStorage.getItem("user")
        ) {
          return (
            <Redirect
              to={{ pathname: "/user/login", state: { from: location } }}
            />
          );
        } else if (path === "/account" && !localStorage.getItem("user")) {
          return (
            <Redirect
              to={{ pathname: "/user/login", state: { from: location } }}
            />
          );
        }
        return (
          <HomeLayout>
            <Component />
          </HomeLayout>
        );
      }}
    />
  );
}
