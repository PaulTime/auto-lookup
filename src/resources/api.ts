import { createClient, Action } from 'react-fetching-library';
import qs from 'query-string';

const HOST = process.env.NODE_ENV === 'production' ? process.env.API_HOST : '';

export type ActionWithQuery = Action & { query: object };

type TClient = ReturnType<typeof createClient>;

export const serializeQueries = () => (action: ActionWithQuery): Action => {
  let endpoint = `${HOST}${action.endpoint}`;

  if (action.query) {
    endpoint = `${endpoint}?${qs.stringify(action.query)}`;
  }

  return { ...action, endpoint };
};

export const getAPIClient = (): TClient =>
  createClient({
    requestInterceptors: [serializeQueries],
    responseInterceptors: []
  });
