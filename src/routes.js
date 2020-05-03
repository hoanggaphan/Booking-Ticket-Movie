import Home from "./pages/HomeModule/home/home";
import DetailMovie from "./pages/HomeModule/detail-movie/detail-movie";
import BookingMovie from "./pages/HomeModule/booking-movie/booking-movie";
import Account from './pages/HomeModule/account/account';
import Login from "./pages/UserModule/login/login";
import Register from "./pages/UserModule/register/register";

const home = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/detail-movie/:maPhim",
    component: DetailMovie,
  },
  {
    path: "/booking-movie/:maLichChieu",
    component: BookingMovie,
  },
  {
    path: "/account",
    component: Account,
  }
];

const user = [
  {
    path: "/user/login",
    component: Login,
  },
  {
    path: "/user/register",
    component: Register,
  },
];

export { home, user };
