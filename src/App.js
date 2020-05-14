import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { SnackbarProvider } from "notistack";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import * as routes from "./routes";
import theme from "./assets/style/theme";
import HomeTemplate from "./template/HomeTemplate";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import UserTemplate from "./template/UserTemplate";

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

  const renderHomeTemplate = (routes) => {
    return routes.map((route, index) => (
      <HomeTemplate key={index} {...route} />
    ));
  };

  const renderUserTemplate = (routes) => {
    return routes.map((route, index) => (
      <UserTemplate key={index} {...route} />
    ));
  };

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
          <Switch>
            {renderHomeTemplate(routes.home)}
            {renderUserTemplate(routes.user)}

            {/* Trang 404 not found */}
            <Route path="" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
