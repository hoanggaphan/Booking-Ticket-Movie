import DefaultBG from "component/fallback/DefaultBG";
import PageNotFound from "pages/PageNotFound/PageNotFound.js";
import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { loginAuth } from "routes/auth";

// Code spliting
const Home = lazy(() => import("pages/HomeModule/home/home"));
const BookingMovie = lazy(() =>
  import("pages/HomeModule/booking-movie/booking-movie")
);
const Account = lazy(() => import("pages/HomeModule/account/account.js"));
const DetailMovie = lazy(() =>
  import("pages/HomeModule/detail-movie/detail-movie.js")
);

function HomeRoutes() {
  const { path } = useRouteMatch();
  const isLoginAuth = loginAuth();

  return (
    <Suspense fallback={<DefaultBG />}>
      <Switch>
        <Route exact path={path} component={Home} />
        <Route path={`${path}/detail-movie/:maPhim`} component={DetailMovie} />
        <Route
          path={`${path}/booking-movie/:maLichChieu`}
          render={({ location }) =>
            isLoginAuth ? (
              <BookingMovie />
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
            isLoginAuth ? (
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
