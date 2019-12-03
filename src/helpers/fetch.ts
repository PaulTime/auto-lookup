import { createClient } from 'react-fetching-library';
import qs from 'query-string';

const HOST = process.env.NODE_ENV === 'production' ? process.env.API_HOST : '';

export type RequestInitWithQuery = RequestInit & { query: object }

export const fetchApiAsync = async (url: RequestInfo, options?: RequestInitWithQuery): Promise<Response> => {
  const isBodyObject = options.body && typeof options.body === 'object';
  const isBodyFormData = options.body && options.body instanceof FormData;

  const { body } = options;
  let endpoint = `${HOST}${url}`;
  let config = { ...options };

  if (options.query) {
    endpoint = `${endpoint}?${qs.stringify(options.query)}`;
  }

  if (isBodyObject && !isBodyFormData) {
    config = {
      ...config,
      headers: {
        ...config.headers,
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(body),
    };
  }

  return await fetch(endpoint, config)
};

export const client = createClient({
  requestInterceptors: [],
  responseInterceptors: [],
  fetch: fetchApiAsync,
});