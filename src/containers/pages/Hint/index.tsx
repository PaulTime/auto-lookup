import React, { Suspense } from 'react';
import { useSuspenseQuery, QueryResponse } from 'react-fetching-library';

import BEM from 'services/bem';
import { useLocationWithQuery } from 'helpers/hooks';
import { getCarsRecourse, TCarInfoResourceParams, TCarInfoResource } from 'resources/carInfo';

import './index.scss';

type TCarsTable = { loading?: boolean };

const bem = BEM('hint-page');

const CarsTable: React.FC<TCarsTable> = ({ loading }: TCarsTable) => {
  const { query } = useLocationWithQuery();
  const response =
    loading
      ? { payload: {} }
      : useSuspenseQuery<TCarInfoResource>(getCarsRecourse(query as TCarInfoResourceParams));

  const { payload: { result = undefined } } = response as QueryResponse;

  // useDidUpdate(() => {
  //
  // }, [query.search]);

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

CarsTable.defaultProps = {
  loading: false,
};

const HintPage: React.FC = () => (
  <Suspense fallback={<CarsTable loading={true} />}>
    <CarsTable />
  </Suspense>
);

export default HintPage;