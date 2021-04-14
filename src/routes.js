/* eslint-disable */
import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import { Constants } from './utils';
import { Routes } from './utils';

const routes = (token, user) => {
  const role = user?.role ? user.role : null;
  const { roles } = Constants;
  const {
    userRotues,
    adminRotues,
    siteMangerRotues,
    openRoutes,
    guestRotues,
    leaderRotues
  } = Routes;
  // console.log('role', role);
  console.log('roles', roles);
  const getChildren = role => {
    switch (role) {
      case roles[0].key:
        return leaderRotues;
        break;
      case roles[1].key:
        return siteMangerRotues;
        break;
      case roles[2].key:
        return userRotues;
        break;
      case roles[3].key:
        return guestRotues;
        break;
      case roles[4].key:
        return adminRotues;
        break;
      default:
        return guestRotues;
    }
  };
  return [
    {
      path: 'app',
      element: token ? <DashboardLayout /> : <Navigate to="/login" />,
      children: getChildren(role)
    },
    {
      path: '/',
      element: !token ? <MainLayout /> : <Navigate to="/app" />,
      children: openRoutes
    }
  ];
};
export { routes };
