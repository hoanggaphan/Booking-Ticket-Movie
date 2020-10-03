import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import DefaultBG from "common/Fallback/DefaultBG";
import PageNotFound from "common/PageNotFound";
import Snackbar from "common/Snackbar";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import theme from "./assets/styles/theme";

// Code Spliting
const HomeLayout = lazy(() => import("features/home/Layout"));
const UserLayout = lazy(() => import("features/user/Layout"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Snackbar>
        <BrowserRouter>
          <Suspense fallback={<DefaultBG />}>
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route path="/home" component={HomeLayout} />
              <Route path="/user" component={UserLayout} />

              {/* Trang 404 not found */}
              <Route component={PageNotFound} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </Snackbar>
    </ThemeProvider>
  );
}

export default App;
