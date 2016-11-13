import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import Container from './containers/container';
import Dashboard from './components/dashboard';
import Main from './components/main';
import TaskList from './components/task-list';
import Login from './components/login';
import ErrorComponent from './components/error';

let appStore;

export const routes = {
  main: {
    component: Main,
    onEnter: requireAuth
  },
  dashboard: {
    component: Dashboard,
    path: null
  },
  boards: {
    path: '/boards/:id',
    component: TaskList
  },
  login: {
    path: '/login',
    component: Login,
    onEnter: skipAuth
  },
  error: {
    path: '/*',
    component: ErrorComponent
  }
};

function requireAuth (_, replace) {
  if (appStore.getState().oauth.accessToken === null) {
    replace('/login');
  }
}

function skipAuth (_, replace) {
  if (appStore.getState().oauth.accessToken !== null) {
    replace('/');
  }
}

export function makeRoutes (store) {
  appStore = store;

  return (
    <Route path="/" component={Container}>
      <Route { ...routes.main }>
        <IndexRoute { ...routes.dashboard } />
        <Route { ...routes.boards } />
      </Route>
      <Route { ...routes.login } />
      <Route { ...routes.error } />
    </Route>
  );
}