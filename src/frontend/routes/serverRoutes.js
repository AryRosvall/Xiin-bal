import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import PlaceDetail from '../containers/PlaceDetail';
import Profile from '../containers/Profile';

const serverRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    exact: true,
  },
  {
    path: '/profile',
    component: Profile,
    exact: true,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/placeDetail/:id',
    component: PlaceDetail,
    exact: true,
  },
];

export default serverRoutes;
