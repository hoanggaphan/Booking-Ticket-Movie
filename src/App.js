import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import DefaultBG from "component/fallback/DefaultBG";
import { SnackbarProvider } from "notistack";
import PageNotFound from "pages/PageNotFound/PageNotFound";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import theme from "./assets/style/theme";

// Code Spliting
const HomeLayout = lazy(() => import("routes/Home/Layout"));
const UserLayout = lazy(() => import("routes/User/Layout"));

const useStyles = makeStyles({
  root: {
    "& span": {
      color: "white",
    },
  },
  containerAnchorOriginTopCenter: {
    top: "65px",
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider
        classes={{
          root: classes.root,
          containerAnchorOriginTopCenter:
            classes.containerAnchorOriginTopCenter,
        }}
        autoHideDuration={4000}
        preventDuplicate
      >
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
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
