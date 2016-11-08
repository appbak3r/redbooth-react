import fetchIntercept from 'fetch-intercept';

// http://stackoverflow.com/questions/5999118/add-or-update-query-string-parameter
function updateQueryStringParameter (uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|#|$)", "i");
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + "=" + value + '$2');
  } else {
    var hash = '';
    if (uri.indexOf('#') !== -1) {
      hash = uri.replace(/.*#/, '#');
      uri = uri.replace(/#.*/, '');
    }
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    return uri + separator + key + "=" + value + hash;
  }
}

export default function registerInterceptor (store) {
  return fetchIntercept.register({
    request: function (url, config) {
      const { accessToken } = store.getState().oauth;
      if (accessToken) {
        url = updateQueryStringParameter(url, 'access_token', accessToken);
      }
      return [ url.replace(/([^:]\/)\/+/g, "$1"), config ];
    },
  });
}
