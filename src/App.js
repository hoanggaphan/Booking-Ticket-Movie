import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import theme from './style/theme';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeTemplate from "./template/HomeTemplate";
import PageNotFound from './pages/PageNotFound';
import * as routes from "./routes";
import UserTemplate from "./template/UserTemplate";

function App() {
  const renderHomeTemplate = routes => {
    return routes.map((route, index) => (
      <HomeTemplate key={index} {...route} />
    ));
  };

  const renderUserTemplate = routes => {
    return routes.map((route, index) => (
      <UserTemplate key={index} {...route} />
    ))
  } 

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline/>
        <Switch>
          {renderHomeTemplate(routes.home)}
          {renderUserTemplate(routes.user)}

          {/* Trang 404 not found */}
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
