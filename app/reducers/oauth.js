import {
  LOGIN,
  LOGOUT,
  GET_TOKEN_REQUEST,
  GET_TOKEN_FAILURE,
  GET_TOKEN_SUCCESS,
  GET_REFRESH_TOKEN_FAILURE,
  GET_REFRESH_TOKEN_REQUEST,
  GET_REFRESH_TOKEN_SUCCESS
} from '../constants/oauth';

const initialState = {
  accessToken: null || localStorage.getItem('accessToken'),
  refreshToken: null || localStorage.getItem('refreshToken'),
  expiresIn: null || localStorage.getItem('expiresIn'),
  fetching: false,
};

export default function oauth (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, fetching: true };
    case LOGOUT:
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('expiresIn');
      localStorage.removeItem('expirationDate');
      return { state, accessToken: null, refreshToken: null, expiresIn: null, fetching: false };
    case GET_REFRESH_TOKEN_REQUEST:
    case GET_TOKEN_REQUEST:
      return { ...state, fetching: true };
    case GET_REFRESH_TOKEN_FAILURE:
    case GET_TOKEN_FAILURE:
      return { ...state, error: action.payload.error, fetching: false };
    case GET_REFRESH_TOKEN_SUCCESS:
    case GET_TOKEN_SUCCESS:
      const { accessToken, refreshToken, expiresIn } = action.payload;
      let expirationDate = Date.now() + expiresIn;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('expiresIn', expiresIn);
      localStorage.setItem('expirationDate', expirationDate);
      return {
        ...state,
        accessToken,
        refreshToken,
        expiresIn,
        expirationDate,
        fetching: false
      };
    default:
      return state;
  }
};