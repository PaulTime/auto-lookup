import React, { useRef, useEffect, DependencyList, EffectCallback } from 'react';

import { LocationExtended } from 'types';
import BEM from 'services/bem';
import { useFetch } from 'services/useFetch';

import './index.scss';

type TProps = { location: LocationExtended };

const bem = BEM('hint-page');

const useDidUpdate = (cb: EffectCallback, deps?: DependencyList): void => {
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      cb()
    }
  }, deps);
};

const HintPage: React.FC<TProps> = ({ location }: TProps) => {
  const { loading, injected: result, fetch } =
    useFetch<object>({
      start: 'start', resolve: 'resolve',
      payload: { search: location.query.search }, initialLoading: Boolean(location.query.search),
    });

  useDidUpdate((): void => {
    fetch();
  },[location.query.search]);

  return (
    <table className={bem()}>
      <caption className={bem('caption')}>Search result</caption>

      <thead className={bem('head')}>
        <tr>
          <th>owner</th>
          <th>year</th>
          <th>crashesCount</th>
          <th>ownersCount</th>
        </tr>
      </thead>

      <tbody className={bem('body', { loading })}>
        <tr>
          {loading && <td><span>...loading</span></td>}
          {result ? Object.entries(result).map(([field, value]) => (
            <td key={field}><span>{value}</span></td>
          )) : (
            <td colSpan={4}><span className={bem('placeholder')}>try to search cars</span></td>
          )}
        </tr>
      </tbody>
    </table>
  );
};

HintPage.defaultProps = {
  location: undefined,
};

export default HintPage;