import React from 'react';

import { useDidUpdate, useLocation } from 'helpers/hooks';
import BEM from 'services/bem';
import { useFetch } from 'services/useFetch';

import './index.scss';

const bem = BEM('hint-page');

const HintPage: React.FC = () => {
  const location = useLocation();

  const { loading, data: result, fetch } = useFetch<object>({
    start: 'start', resolve: 'resolve',
    payload: { search: location.query.search },
    initialLoading: Boolean(location.query.search),
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

export default HintPage;