import Home from "./pages/HomeModule/home/home";
import News from "./pages/HomeModule/news/news";
import DetailMovie from "./pages/HomeModule/detail-movie/detail-movie";
import BookingMovie from "./pages/HomeModule/booking-movie/booking-movie";
import Account from './pages/HomeModule/account/account';
import Login from "./pages/UserModule/login/login";
import Register from "./pages/UserModule/register/register";
import Reset from "./pages/UserModule/reset/reset";

const home = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/news",
    component: News,
    exact: false
  },
  {
    path: "/detail-movie/:maPhim",
    component: DetailMovie,
    exact: false
  },
  {
    path: "/booking-movie/:maLichChieu",
    component: BookingMovie,
    exact: false
  },
  {
    path: "/account",
    component: Account,
    exact: false
  }
];

const user = [
  {
    path: "/user/login",
    component: Login,
    exact: false
  },
  {
    path: "/user/register",
    component: Register,
    exact: false
  },
  {
    path: "/user/reset",
    component: Reset,
    exact: false
  }
];

export { home, user };
