// @flow
import { lazy } from 'react';

const routes = [
  {
    path: '/login',
    auth: false,
    exact: true,
    component: lazy(() => import('modules/auth/login')),
  },
  {
    path: '/signup',
    auth: false,
    exact: true,
    component: lazy(() => import('modules/auth/signup')),
  },
  {
    path: '/user-dashboard',
    exact: true,
    auth: true,
    component: lazy(() => import('modules/home/userHome')),
  },
  {
    path: '/admin-dashboard',
    exact: true,
    auth: true,
    component: lazy(() => import('modules/home/adminHome')),
  },
  {
    path: '/merchant-dashboard',
    exact: true,
    auth: true,
    component: lazy(() => import('modules/home/merchantHome')),
  },
  {
    path: '/dashboard',
    exact: true,
    auth: true,
    component: lazy(() => import('modules/home')),
  },
];

export default routes;
