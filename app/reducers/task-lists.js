import { GET_TASK_LISTS_SUCCESS, GET_TASK_LISTS_FAILURE, GET_TASK_LISTS_REQUEST } from '../constants/projects';

const initialState = {
  taskLists: [],
  fetching: false
};

export default function taskLists (state = initialState, action) {
  switch (action.type) {
    case GET_TASK_LISTS_REQUEST:
      return { ...state, fetching: true };
    case GET_TASK_LISTS_FAILURE:
      return { ...state, error: action.payload.error, fetching: false };
    case GET_TASK_LISTS_SUCCESS:
      return {
        ...state,
        taskLists: action.payload,
        fetching: false
      };
    default:
      return state;
  }
};