import React from 'react';
import { Switch, Route } from 'react-router';
import App from '../components/app';
import Home from '../components/home';
import About from '../components/about';
import NotFound from '../components/not-found/NotFound';
import { getData } from '../redux/actions/home';
import { getAboutData } from '../redux/actions/about';

export const routes = [{
  path: '/',
  exact: true,
  component: Home,
  loadData: () => getData()
}, {
  path: '/about',
  exact: true,
  component: About,
  loadData: () => getAboutData()
}, {
  component: NotFound
}];

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
