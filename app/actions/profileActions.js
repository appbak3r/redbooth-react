import fetch from 'isomorphic-fetch';
import config from 'config';
import { GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS } from '../constants/profile';

export function getProfile () {
  return dispatch => {
    dispatch({
      type: GET_PROFILE_REQUEST
    });

    fetch(`${config.redbooth.baseURL}/me`).then(response => {
      if (response.status >= 400) {
        return Promise.reject(response);
      }
      return response.json();
    }).then(json => {
      dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: json
      })
    }).catch(response => {
      response.json().then(json => {
        dispatch({
          type: GET_PROFILE_FAILURE,
          payload: json
        })
      });
    });
  };
}
