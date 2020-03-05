import React from "react";
import { Route } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";

export default function HomeTemplate({ component: Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
