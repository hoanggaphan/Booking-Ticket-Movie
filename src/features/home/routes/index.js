import DefaultBG from "common/Fallback/DefaultBG";
import PageNotFound from "common/PageNotFound";
import React, { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// Code spliting
const HomePage = lazy(() => import("features/home/pages/home"));
const BookingMoviePage = lazy(() => import("features/home/pages/booking-movie"));
const Account = lazy(() => import("features/home/pages/account"));
const DetailMoviePage = lazy(() => import("features/home/pages/detail-movie"));
const CinemaList = lazy(() => import("features/home/pages/cinema"))

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
          path={`${path}/detail-movie/:maPhim`}
          component={DetailMoviePage}
        />
        <Route
          path={`${path}/cinema-list`}
          component={CinemaList}
        />

        <ProtectedRoute
          path={`${path}/booking-movie/:maLichChieu`}
          component={BookingMoviePage}
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
