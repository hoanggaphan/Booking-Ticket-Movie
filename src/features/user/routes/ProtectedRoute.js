import { loginAuth } from "auth/login";
import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route
      {...props}
      render={() =>
        loginAuth("user") ? <Redirect to="/home" /> : <Component />
      }
    />
  );
}

export default ProtectedRoute;
