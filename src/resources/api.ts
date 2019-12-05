import { createClient, Action } from 'react-fetching-library';
import qs from 'query-string';

const HOST = process.env.NODE_ENV === 'production' ? process.env.API_HOST : '';

type TClient = ReturnType<typeof createClient>;

export const requestHostInterceptor = () => (action: Action): Action => ({
  ...action,
  endpoint: `${HOST}${action.endpoint}`
});

export const serializeQueries = () => (
  action: Action<{ query: object }>
): Action => {
  let endpoint = action.endpoint;

  if (action.query) {
    endpoint = `${endpoint}?${qs.stringify(action.query)}`;
  }

  return { ...action, endpoint };
};

export const getAPIClient = (): TClient =>
  createClient({
    requestInterceptors: [requestHostInterceptor, serializeQueries],
    responseInterceptors: []
  });
