import { GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS } from '../constants/profile';

const initialState = {
  email: null,
  photoURL: null,
  firstName: null,
  lastName: null,
  fetching: false
};

export default function profile (state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return { ...state, fetching: true };
    case GET_PROFILE_FAILURE:
      return { ...state, error: action.payload.error, fetching: false };
    case GET_PROFILE_SUCCESS:
      const { email, lastName, firstName, avatarUrl } = action.payload;
      return {
        ...state,
        email,
        lastName,
        firstName,
        photoURL: avatarUrl,
        fetching: false
      };
    default:
      return state;
  }
};