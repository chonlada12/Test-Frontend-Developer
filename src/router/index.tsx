import { RouteObject } from 'react-router-dom';
import AppLayout from '../layout';
import FormAndTablePage from '../pages/form-table';
import HomePage from '../pages/home';
import LayoutAndStylePage from '../pages/layout-style';

// const FormAndTablePage = lazy(() => import('../pages/form-table'));
// const LayoutAndStylePage = lazy(() => import('../pages/layout-style'));
// const HomePage = lazy(() => import('../pages/home'));

const APP_ROUTES: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/layout-style',
        element: <LayoutAndStylePage />,
      },
      {
        path: '/form-table',
        element: <FormAndTablePage />,
      },
    ],
  },
];

export default APP_ROUTES;
