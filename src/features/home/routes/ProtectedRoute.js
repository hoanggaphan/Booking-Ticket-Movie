import { loginAuth } from "auth/login";
import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route
      {...props}
      render={({ location }) =>
        loginAuth("user") ? (
          <Component />
        ) : (
          <Redirect
            to={{ pathname: "/user/login", state: { from: location } }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
