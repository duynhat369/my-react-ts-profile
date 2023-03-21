import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import { routeObjects } from './App.data';
import Splash from './components/splash/Splash';

const App = () => {
  const routes = useRoutes(routeObjects);

  return <Suspense fallback={<Splash canProfileClick={false} />}>{routes}</Suspense>;
};

export default App;
