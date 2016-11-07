import {
  LOGIN,
  LOGOUT,
  GET_TOKEN_REQUEST,
  GET_TOKEN_FAILURE,
  GET_TOKEN_SUCCESS
} from '../constants/oauth';

const initialState = {
  accessToken: null || localStorage.getItem('accessToken'),
  refreshToken: null || localStorage.getItem('refreshToken'),
  expiresIn: null || localStorage.getItem('expiresIn'),
  fetching: true,
};

export default function oauth (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state;
    case LOGOUT:
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('expiresIn');
      return { state, accessToken: null, refreshToken: null, expiresIn: null};
    case GET_TOKEN_REQUEST:
      return { ...state, fetching: true };
    case GET_TOKEN_FAILURE:
      return { ...state, error: action.payload.error, fetching: false };
    case GET_TOKEN_SUCCESS:
      const { accessToken, refreshToken, expiresIn } = action.payload;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('expiresIn', expiresIn);
      return {
        ...state,
        accessToken,
        refreshToken,
        expiresIn,
        fetching: false
      };
    default:
      return state;
  }
};