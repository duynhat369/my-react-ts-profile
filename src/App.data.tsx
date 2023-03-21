import { RouteObject } from 'react-router-dom';
import Splash from './components/splash/Splash';

export const routeObjects: RouteObject[] = [
  {
    path: '',
    element: <Splash canProfileClick={true} />,
  },
];
