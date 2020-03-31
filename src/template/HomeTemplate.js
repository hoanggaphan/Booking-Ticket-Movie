import React from "react";
import { Route, Redirect } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";

export default function HomeTemplate({ component: Component, path, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => {
        if(path === "/booking-movie/:maLichChieu" && !localStorage.getItem("user")) {
          return <Redirect to="/login" />
        }
        return (
          <HomeLayout>
            <Component {...propsComponent} />
          </HomeLayout>
        );
      }}
    />
  );
}
