import { DependencyList, EffectCallback, useEffect, useRef } from "react";
import qs from 'query-string'
import { useLocation as routerUseLocation } from 'react-router-dom';

import { LocationExtended } from 'types';

export const useLocation = (): LocationExtended => {
  const location = routerUseLocation();

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