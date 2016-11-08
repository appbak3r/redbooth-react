import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import oauth from './oauth';
import profile from './profile';
import projects from './projects';

export default combineReducers({
  oauth,
  profile,
  projects,
  routing: routerReducer
});