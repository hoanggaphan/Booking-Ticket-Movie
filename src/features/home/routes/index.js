import DefaultBG from "common/Fallback/DefaultBG";
import PageNotFound from "common/PageNotFound";
import React, { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// Code spliting
const HomePage = lazy(() => import("features/home/pages/home"));
const MovieBookingPage = lazy(() => import("features/home/pages/movie-booking"));
const Account = lazy(() => import("features/home/pages/account"));
const MovieDetailPage = lazy(() => import("features/home/pages/movie-detail"));
const Cinema = lazy(() => import("features/home/pages/cinema"))

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
          path={`${path}/cinema`}
          component={Cinema}
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
