/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reduxState from '../redux/reducers';

const loggerMiddleware = createLogger();

export default function createReduxStore({ preloadedState, server } = {}) {
  let enhancer;

  if (process.env.NODE_ENV !== 'production' && !server) {
    enhancer = compose(
      applyMiddleware(thunkMiddleware, loggerMiddleware),
      // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
    );
  } else {
    enhancer = applyMiddleware(thunkMiddleware);
  }

  return createStore(reduxState, preloadedState, enhancer);
}
