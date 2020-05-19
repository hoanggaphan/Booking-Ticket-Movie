import PageNotFound from "pages/PageNotFound/PageNotFound";
import Login from "pages/UserModule/login/login";
import Register from "pages/UserModule/register/register";
import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { loginAuth } from "routes/auth";

function UserRoutes() {
  const { path } = useRouteMatch();
  const isLoginAuth = loginAuth();

  return (
    <Switch>
      <Route
        exact
        path={`${path}/login`}
        render={() => (isLoginAuth ? <Redirect to="/home" /> : <Login />)}
      />
      <Route path={`${path}/register`} component={Register} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default UserRoutes;
