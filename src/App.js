import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import theme from './style/theme';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routesHome } from "./routes";
import HomeTemplate from "./template/HomeTemplate";
import PageNotFound from './pages/PageNotFound';
import Login from './pages/login';
import Register from './pages/register';

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
          {/* Trang Home */}
          {showMenuHome(routesHome)}

          {/* Trang Login, Register Cho Users */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          {/* Trang 404 not found */}
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
