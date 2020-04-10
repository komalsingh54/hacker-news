import React from 'react';
import { Switch, Route } from 'react-router';

import App from '../components/app';
import Home from '../components/home';
import NotFound from '../components/not-found/NotFound';
import { getFeeds } from '../redux/actions/home';
import TechErrorComponent from '../components/TechError/TechErrorComponent';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    loadData: (query) => getFeeds(query),
  },
  {
    path: '/tech-error',
    component: TechErrorComponent,
  },
  {
    component: NotFound,
  },
];

export default function Router() {
  return (
    <App>
      <Switch>
        {routes.map((route) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Route key={route.path || 'notfound'} {...route} />
        ))}
      </Switch>
    </App>
  );
}
