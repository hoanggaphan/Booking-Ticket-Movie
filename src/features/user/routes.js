import { loginUserAuth } from "auth/loginUser";
import PageNotFound from "common/PageNotFound";
import Login from "features/user/pages/login";
import Register from "features/user/pages/register";
import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";

function UserRoutes() {
  const { path } = useRouteMatch();
  const isLogin = loginUserAuth();

  return (
    <Switch>
      <Route
        exact
        path={`${path}/login`}
        render={() => (isLogin ? <Redirect to="/home" /> : <Login />)}
      />
      <Route path={`${path}/register`} component={Register} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default UserRoutes;
