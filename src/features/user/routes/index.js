import PageNotFound from "common/PageNotFound";
import Login from "features/user/pages/login";
import Register from "features/user/pages/register";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";

function UserRoutes() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <ProtectedRoute path={`${path}/login`} component={Login} />

      <Route path={`${path}/register`} component={Register} />

      {/* Page 404 */}
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default UserRoutes;
