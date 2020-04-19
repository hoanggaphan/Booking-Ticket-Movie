import React from "react";
import { Route, Redirect } from "react-router-dom";
import Navbar from "./../component/navbar/navbar";
import { Box } from "@material-ui/core";
import MyFooter from "../component/footer/footer";

function HomeLayout(props) {
  return (
    <Box style={{backgroundImage: `url('${process.env.PUBLIC_URL}/dots.png')`, backgroundSize: "contain"}}>
      <Navbar />
      <Box component="main" pt="65px">
        {props.children}
      </Box>
      <MyFooter/>
    </Box>
  );
}

export default function HomeTemplate({ component: Component, path, ...props }) {
  return (
    <Route
      {...props}
      render={({location}) => {
        if(path === "/booking-movie/:maLichChieu" && !localStorage.getItem("user")) {
          return <Redirect to={{pathname: "/user/login", state: {from: location}}} />
        }
        else if(path === "/account" && !localStorage.getItem("user")) {
          return <Redirect to={{pathname: "/user/login", state: {from: location}}} />
        }
        return (
          <HomeLayout>
            <Component/>
          </HomeLayout>
        );
      }}
    />
  );
}
