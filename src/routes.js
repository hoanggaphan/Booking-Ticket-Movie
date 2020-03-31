import Home from "./pages/home/home";
import News from "./pages/home/news";
import DetailMovie from "./pages/home/detail-movie";
import BookingMovie from "./pages/home/booking-movie";
import Login from "./pages/user/login";
import Register from "./pages/user/register";
import Reset from "./pages/user/reset";

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
  }
];

const user = [
  {
    path: "/login",
    component: Login,
    exact: false
  },
  {
    path: "/register",
    component: Register,
    exact: true
  },
  {
    path: "/reset",
    component: Reset,
    exact: false
  }
];

export { home, user };
