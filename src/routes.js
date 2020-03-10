import Home from './pages/home/home';
import ShowTimes from './pages/home/show-times';
import ListCenima from './pages/home/list-cenima';
import News from './pages/home/news';
import DetailMovie from './pages/home/detail-movie';

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
        path: '/list-cenima',
        component: ListCenima,
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
    }
]

export { routesHome };