import { useEffect, useRef, EffectCallback, DependencyList } from 'react';
import { useLocation } from 'react-router';
import qs from 'query-string';

import { LocationWithQuery } from 'types';

export const useLocationWithQuery = (): LocationWithQuery => {
  const location = useLocation();

  return { ...location, query: qs.parse(location.search) }
};

export const useDidUpdate = (cb: EffectCallback, deps: DependencyList): void => {
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      cb()
    }
  }, deps);
};