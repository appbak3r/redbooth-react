import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import oauth from './oauth';

export default combineReducers({
  oauth,
  routing: routerReducer
});