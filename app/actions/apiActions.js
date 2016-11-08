import fetch from 'isomorphic-fetch';
import config from 'config';

export function getProfile () {
  return dispatch => {
    fetch(`${config.redbooth.baseURL}/me`).then(response => {
      return response.json();
    }).then(json => {
      console.log(json);
    });
  };
}
