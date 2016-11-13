import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import oauth from './oauth';
import profile from './profile';
import projects from './projects';
import taskLists from './task-lists';

export default combineReducers({
  oauth,
  profile,
  projects,
  taskLists,
  routing: routerReducer
});