/* eslint-disable */
import React from 'react';
import { Navigate } from 'react-router-dom';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import VerifyView from 'src/views/auth/verifyView';
import ForgotPasswordView from 'src/views/auth/ForgotPasswordView';
import ResetPasswordView from 'src/views/auth/ResetPasswordView';
import LandingPageView from 'src/views/auth/LandingPageView';
import SuccessView from 'src/views/auth/SuccessView';
import SettingsView from 'src/views/settings/SettingsView';
import SitesView from 'src/views/sites';
import User from 'src/views/user';
import Guest from 'src/views/guest';
import Admin from 'src/views/admin/dashboard/Dashboard';
import UserGroup from 'src/views/admin/groupUser/GroupUser';
import Task from 'src/views/admin/tasks/Task';
import LeaderSite from 'src/views/sites/LeaderSite';
import InviteUsers from 'src/views/invites';
import SiteManager from 'src/views/siteManager';

const commonRoutes = [
  { path: 'settings', element: <SettingsView /> },
  { path: 'account', element: <AccountView /> }
];
const siteMangerRotues = [
  { path: '/', element: <SiteManager /> },
  { path: 'customers', element: <CustomerListView /> },
  { path: 'dashboard', element: <DashboardView /> },
  { path: 'products', element: <ProductListView /> },
  { path: 'msite', element: <SiteManager /> },
  { path: 'inviteusers', element: <InviteUsers /> },
  { path: '*', element: <Navigate to="/404" /> },
  ...commonRoutes
];
const adminRotues = [
  { path: '/', element: <Admin /> },
  { path: '/admin', element: <Admin /> },
  { path: '/usergroup', element: <UserGroup /> },
  { path: '/task', element: <Task /> },
  { path: 'account', element: <AccountView /> },
  { path: 'customers', element: <CustomerListView /> },
  { path: 'dashboard', element: <DashboardView /> },
  { path: 'sites', element: <SitesView /> },
  { path: 'inviteusers', element: <InviteUsers /> },
  { path: '*', element: <Navigate to="/404" /> },
  ...commonRoutes
];
const leaderRotues = [
  { path: '/', element: <SitesView /> },
  { path: '/admin', element: <Admin /> },
  { path: 'account', element: <AccountView /> },
  { path: 'customers', element: <CustomerListView /> },
  { path: 'dashboard', element: <DashboardView /> },
  { path: 'sites', element: <SitesView /> },
  { path: 'inviteusers', element: <InviteUsers /> },
  { path: '*', element: <Navigate to="/404" /> },
  ...commonRoutes
];
const userRotues = [
  { path: '/', element: <User /> },
  { path: 'customers', element: <CustomerListView /> },
  { path: 'dashboard', element: <DashboardView /> },
  { path: 'products', element: <ProductListView /> },
  { path: 'user', element: <User /> },
  { path: 'inviteusers', element: <InviteUsers /> },
  { path: '*', element: <Navigate to="/404" /> },
  ...commonRoutes
];
const guestRotues = [
  { path: '/', element: <Guest /> },
  { path: 'guest', element: <Guest /> },
  { path: '*', element: <Navigate to="/404" /> },
  ...commonRoutes
];
const openRoutes = [
  { path: 'login', element: <LoginView /> },
  { path: 'register', element: <RegisterView /> },
  { path: 'verify', element: <VerifyView /> },
  { path: 'landing/:token', element: <LandingPageView /> },
  { path: 'success', element: <SuccessView /> },
  { path: 'forgotPassword', element: <ForgotPasswordView /> },
  { path: 'resetPassword', element: <ResetPasswordView /> },
  { path: '404', element: <NotFoundView /> },
  { path: '/', element: <Navigate to="/app" /> },
  { path: '*', element: <Navigate to="/404" /> }
];
export default {
  userRotues,
  adminRotues,
  siteMangerRotues,
  openRoutes,
  leaderRotues,
  guestRotues
};
