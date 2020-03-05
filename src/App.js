import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import theme from './styles/theme';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routesHome } from "./routes";
import HomeTemplate from "./template/HomeTemplate";
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  const showMenuHome = routesHome => {
    return routesHome.map((route, index) => (
      <HomeTemplate key={index} {...route} />
    ));
  };
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline/>
        <Switch>
          {showMenuHome(routesHome)}
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
