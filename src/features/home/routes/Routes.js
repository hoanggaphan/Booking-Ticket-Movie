import DefaultBG from "common/Fallback/DefaultBG";
import PageNotFound from "common/PageNotFound";
import React, { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// Code spliting
const HomePage = lazy(() => import("../pages/home"));
const AccountPage = lazy(() => import("../pages/account"));
const MovieDetailPage = lazy(() => import("../pages/movie-detail"));
const MovieBookingPage = lazy(() => import("../pages/movie-booking"));
const Film24hPage = lazy(() => import("../pages/film24h"));
const ReviewPage = lazy(() => import("../pages/review"));
const PromotionPage = lazy(() => import("../pages/promotion"));

function Routes() {
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
          component={Film24hPage} 
        />
        <Route 
          path={`${path}/review/:id`} 
          component={ReviewPage} 
        />
        <Route 
          path={`${path}/promotion/:id`} 
          component={PromotionPage} 
        />

        <ProtectedRoute
          path={`${path}/booking/:maLichChieu`}
          component={MovieBookingPage}
        />
        <ProtectedRoute 
          path={`${path}/account`} 
          component={AccountPage} 
        />

        {/* Page 404 */}
        <Route component={PageNotFound} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
