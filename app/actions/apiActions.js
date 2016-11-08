import fetch from 'isomorphic-fetch';
import config from 'config';

export function getProfile (accessToken) {
  return dispatch => {
    fetch(`${config.redbooth.baseURL}me?access_token=${accessToken}`)
      .then(response => {
        return response.json();
      }).then(json => {
      console.log(json);
    });
  };
}
