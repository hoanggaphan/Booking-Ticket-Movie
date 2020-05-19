import { loginUserAuth } from "auth/loginUser";
import DefaultBG from "common/Fallback/DefaultBG";
import PageNotFound from "common/PageNotFound";
import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";

// Code spliting
const HomePage = lazy(() => import("features/home/pages/home"));
const BookingMoviePage = lazy(() =>
  import("features/home/pages/booking-movie")
);
const Account = lazy(() => import("features/home/pages/account"));
const DetailMoviePage = lazy(() => import("features/home/pages/detail-movie"));

function HomeRoutes() {
  const { path } = useRouteMatch();
  const isLogin = loginUserAuth();

  return (
    <Suspense fallback={<DefaultBG />}>
      <Switch>
        <Route exact path={path} component={HomePage} />
        <Route
          path={`${path}/detail-movie/:maPhim`}
          component={DetailMoviePage}
        />
        <Route
          path={`${path}/booking-movie/:maLichChieu`}
          render={({ location }) =>
            isLogin ? (
              <BookingMoviePage />
            ) : (
              <Redirect
                to={{ pathname: "/user/login", state: { from: location } }}
              />
            )
          }
        />
        <Route
          path={`${path}/account`}
          render={({ location }) =>
            isLogin ? (
              <Account />
            ) : (
              <Redirect
                to={{ pathname: "/user/login", state: { from: location } }}
              />
            )
          }
        />

        {/* Page 404 */}
        <Route component={PageNotFound} />
      </Switch>
    </Suspense>
  );
}

export default HomeRoutes;
