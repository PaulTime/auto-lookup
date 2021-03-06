import { useEffect, useRef } from 'react';
import {
  useQuery,
  Action,
  UseQueryResponse,
  QueryResponse,
  convertActionToBase64
} from 'react-fetching-library';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useSuspenseQuery = <R, T = any>(
  action: Action<T>,
  filter?: boolean
): never | UseQueryResponse<R> => {
  const fetchPromise = useRef<null | Promise<QueryResponse<R>>>(null);
  const response = useQuery<R>(action, false);

  useEffect(() => {
    if (filter) {
      fetchPromise.current = response.query();
    }
  }, [convertActionToBase64(action)]);

  if (response.loading) {
    throw fetchPromise.current;
  }

  return {
    ...response,
    query: (): Promise<QueryResponse<R>> => {
      fetchPromise.current = response.query();
      return fetchPromise.current;
    }
  };
};
