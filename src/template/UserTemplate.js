import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function UserTemplate({ component: Component, path, ...props }) {
  return (
    <Route
      {...props}
      render={() => {
        if (path === "/user/login" && localStorage.getItem("user")) {
          return <Redirect to="/" />;
        }
        return <Component />;
      }}
    />
  );
}
