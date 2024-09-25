import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Activity } from './components/Activity/Activity';
import { ChallengeCancer } from './components/ChallengeCancer/ChallengeCancer';
import { HomePage } from './pages/Home.page';
import { FinishPresentation } from './components/FinishPresentation/FinishPresentation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/challenge-cancer',
    element: <ChallengeCancer />,
  },
  {
    path: '/activity',
    element: <Activity />,
  },
  {
    path: '/finish-presentation',
    element: <FinishPresentation />,
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
