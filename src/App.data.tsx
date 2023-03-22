import { RouteObject } from 'react-router-dom';
import Splash from './components/splash/splash';
import Profile from './pages/profile/profile';

export const routeObjects: RouteObject[] = [
  {
    path: '',
    element: <Splash canProfileClick={true} />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
];
