import React from "react";
import { Redirect, Route } from "react-router-dom";
import { loginAuth } from 'auth/login';

function ProtectedRoute({ component: Component, ...props }) {
  const isLogin = loginAuth('user');

  return (
    <Route
      {...props}
      render={({ location }) =>
        isLogin ? (
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
