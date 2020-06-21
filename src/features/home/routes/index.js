import DefaultBG from "common/Fallback/DefaultBG";
import PageNotFound from "common/PageNotFound";
import React, { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// Code spliting
const HomePage = lazy(() => import("../pages/home"));
const Account = lazy(() => import("../pages/account"));
const MovieDetailPage = lazy(() => import("../pages/movie-detail"));
const MovieBookingPage = lazy(() => import("../pages/movie-booking"));
const Film24h = lazy(() => import("../pages/film24h"));
const Review = lazy(() => import("../pages/review"));
const Promotion = lazy(() => import("../pages/promotion"));

function HomeRoutes() {
  const { path } = useRouteMatch();

  return (
    <Suspense fallback={<DefaultBG />}>
      <Switch>
        <Route
          exact
          path={path} // path="/home"
          component={HomePage}
        />
        <Route
          path={`${path}/movie-detail/:maPhim`}
          component={MovieDetailPage}
        />
        <Route 
          path={`${path}/film24h/:id`} 
          component={Film24h} 
        />
        <Route 
          path={`${path}/review/:id`} 
          component={Review} 
        />
        <Route 
          path={`${path}/promotion/:id`} 
          component={Promotion} 
        />

        <ProtectedRoute
          path={`${path}/booking/:maLichChieu`}
          component={MovieBookingPage}
        />
        <ProtectedRoute 
          path={`${path}/account`} 
          component={Account} 
        />

        {/* Page 404 */}
        <Route component={PageNotFound} />
      </Switch>
    </Suspense>
  );
}

export default HomeRoutes;
