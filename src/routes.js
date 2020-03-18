import Home from './pages/home/home';
import ShowTimes from './pages/home/show-times';
import ListCinema from './pages/home/list-cinema.js';
import News from './pages/home/news';
import DetailMovie from './pages/home/detail-movie';
import BookingMovie from './pages/home/booking-movie';

const routesHome = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/show-times',
        component: ShowTimes,
        exact: false,
    },
    {
        path: '/list-cinema',
        component: ListCinema,
        exact: false,
    },
    {
        path: '/news',
        component: News,
        exact: false,
    },
    {
        path: '/detail-movie/:maPhim',
        component: DetailMovie,
        exact: false,
    },
    {
        path: '/booking-movie/:maLichChieu',
        component: BookingMovie,
        exact: false
    }
]

export { routesHome };