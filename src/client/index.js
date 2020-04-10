/* eslint-disable no-underscore-dangle */
import '@babel/polyfill';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js/stable';

import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Router from '../universal/routes';
import createReduxStore from '../universal/createReduxStore';
import { register } from './ServiceWorker';

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const store = createReduxStore({ preloadedState });

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

register();
