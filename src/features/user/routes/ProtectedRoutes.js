import React from "react";
import { Redirect, Route } from "react-router-dom";
import { loginAuth } from "auth/login";

function ProtectedRoute({ component: Component, ...props }) {
  const isLogin = loginAuth("user");

  return (
    <Route
      {...props}
      render={() => (isLogin ? <Redirect to="/home" /> : <Component />)}
    />
  );
}

export default ProtectedRoute;
