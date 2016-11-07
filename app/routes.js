import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Container from './containers/container';
import Dashboard from './components/dashboard';
import Login from './components/login';

let appStore;

export const routes = {
  dashboard: {
    path: '/',
    component: Dashboard,
    onEnter: requireAuth
  },
  login: {
    path: '/login',
    component: Login,
    onEnter: skipAuth
  },
};

function requireAuth (_, replace) {
  if (appStore.getState().oauth.accessToken === null) {
    replace('/login');
  }
}

function skipAuth(_, replace){
  if (appStore.getState().oauth.accessToken !== null) {
    replace('/');
  }
}

const indexRoute = (route) => Object.assign({}, route, { path: null });

export function makeRoutes (store) {
  appStore = store;

  return (
    <Route path="/" component={Container}>
      <IndexRoute { ...indexRoute(routes.dashboard) } />
      <Route { ...routes.login } />
    </Route>
  );
}