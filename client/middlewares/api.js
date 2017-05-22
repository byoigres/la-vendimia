import 'isomorphic-fetch';
import { normalize } from 'normalizr';

export const CALL_API = Symbol('Call API');

function callApi(requestInfo = {
  method: 'GET',
  body: null,
  headers: {},
}, schema) {
  const { endpoint, method, body, headers } = requestInfo;
  const fullUrl = ` /${endpoint}`;

  const options = {
    method,
    headers,
    credentials: 'same-origin',
  };

  if (body) {
    if (method === 'POST') {
      const data = new FormData();

      Object.keys(body).forEach((key) => {
        if (!data.has(key)) {
          data.append(key, body[key]);
        }
      });

      options.body = data;
    } else {
      options.body = JSON.stringify(body);
    }
  }

  return fetch(fullUrl, options).then(response =>
      response.json().then(json => ({ json, response })),
    ).then(({ json, response }) => {
      if (!response.ok) {
        // console.log('rejecting', json);
        return Promise.reject(json);
      }

      if (schema) {
        const normalized = normalize(json, schema);
        return Object.assign({}, normalized);
      }

      return json;
    });
}

export default () => next => (action) => {
  const callAPI = action[CALL_API];

  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  const {
    endpoint,
    method,
    body,
    types,
    schema,
  } = callAPI;

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  }

  const [requestType, successType, failureType] = types;
  next(actionWith({ type: requestType }));

  return callApi({
    endpoint,
    method,
    body,
  }, schema).then(
    response => next(actionWith({
      response,
      type: successType,
    })),
    response => next(actionWith({
      type: failureType,
      error: response.error || 'Something bad happened',
    })),
  );
};
