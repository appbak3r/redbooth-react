import { GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE } from '../constants/projects';

const initialState = {
  projects: [],
  fetching: false
};

export default function projects (state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS_REQUEST:
      return { ...state, fetching: true };
    case GET_PROJECTS_FAILURE:
      return { ...state, error: action.payload.error, fetching: false };
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        fetching: false
      };
    default:
      return state;
  }
};