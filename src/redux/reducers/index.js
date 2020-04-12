import { combineReducers } from 'redux';
import home from './home';
import error from './ErrorReucer';

const reduxState = combineReducers({
  home,
  error,
});

export default reduxState;
