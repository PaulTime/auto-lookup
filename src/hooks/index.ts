import { useEffect, useRef, EffectCallback, DependencyList } from 'react';
import { useLocation } from 'react-router';
import { Location } from 'history';
import qs, { ParsedQuery } from 'query-string';

export const useLocationWithQuery = <Q = ParsedQuery>(): Location & {
  query: Q;
} => {
  const location = useLocation();

  return { ...location, query: (qs.parse(location.search) as unknown) as Q };
};

export const useDidUpdate = (
  cb: EffectCallback,
  deps: DependencyList
): void => {
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      cb();
    }
  }, deps);
};
