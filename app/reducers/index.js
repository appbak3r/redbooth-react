import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import oauth from './oauth';
import profile from './profile';

export default combineReducers({
  oauth,
  profile,
  routing: routerReducer
});