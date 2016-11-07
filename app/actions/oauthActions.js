import {
  LOGIN,
  REFRESH_TOKEN,
  LOGOUT,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILURE,
  GET_TOKEN_REQUEST
} from '../constants/oauth';

import fetch from 'isomorphic-fetch';
import config from 'config';

export function login () {
  return (dispatch) => {
    dispatch({
      type: LOGIN
    });

    const url = config.redbooth.authURL;
    let params = new URLSearchParams();
    params.append('client_id', config.redbooth.clientId);
    params.append('response_type', 'code');
    params.append('redirect_uri', config.redbooth.redirectURL);
    window.location.href = `${url}?${params}`;
  }
}

export function getToken (code) {
  return (dispatch) => {
    dispatch({
      type: GET_TOKEN_REQUEST
    });

    const url = config.redbooth.tokenURL;

    let params = new URLSearchParams();
    params.append('code', code);

    fetch(url, {
      method: 'post',
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: params
    }).then(response => {
      if (response.status >= 400) {
        return Promise.reject(response);
      }
      return response.json();
    }).then(json => {
      dispatch({
        type: GET_TOKEN_SUCCESS,
        payload: json
      })
    }).catch(response => {
      response.json().then(json => {
        dispatch({
          type: GET_TOKEN_FAILURE,
          payload: json
        })
      });
    });
  }
}

export function refreshToken () {
  return (dispatch) => {
    dispatch({
      type: REFRESH_TOKEN
    })
  }
}

export function logout () {
  return (dispatch) => {
    dispatch({
      type: LOGOUT
    })
  }
}