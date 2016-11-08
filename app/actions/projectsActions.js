import fetch from 'isomorphic-fetch';
import config from 'config';
import { GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE } from '../constants/projects';

export function getProjects () {
  return dispatch => {
    dispatch({
      type: GET_PROJECTS_REQUEST
    });

    fetch(`${config.redbooth.baseURL}/projects`).then(response => {
      if (response.status >= 400) {
        return Promise.reject(response);
      }
      return response.json();
    }).then(json => {
      dispatch({
        type: GET_PROJECTS_SUCCESS,
        payload: json
      })
    }).catch(response => {
      response.json().then(json => {
        dispatch({
          type: GET_PROJECTS_FAILURE,
          payload: json
        })
      });
    });
  };
}
