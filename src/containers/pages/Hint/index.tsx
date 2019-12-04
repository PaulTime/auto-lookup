import React, { Suspense } from 'react';

import BEM from 'services/bem';
import { useLocationWithQuery } from 'hooks';
import { useSuspenseQuery } from 'hooks/fetch';
import {
  getCarsRecourse,
  TCarInfoResourceParams,
  TCarInfoResource
} from 'resources/carInfo';

import './index.scss';

type TCarsTable = { suspend?: boolean };

const bem = BEM('hint-page');

const CarsTable: React.FC<TCarsTable> = ({ suspend }: TCarsTable) => {
  const { query } = useLocationWithQuery();

  const { payload = {} } = useSuspenseQuery<{ result?: TCarInfoResource }>(
    getCarsRecourse(query as TCarInfoResourceParams),
    Boolean(query.search) && !suspend
  );

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

      <tbody className={bem('body', { loading: suspend })}>
        <tr>
          {payload.result ? (
            Object.entries(payload.result).map(([field, value]) => (
              <td key={field}>
                <span>{value}</span>
              </td>
            ))
          ) : (
            <td colSpan={4}>
              <span className={bem('placeholder')}>try to search cars</span>
            </td>
          )}
        </tr>
      </tbody>
    </table>
  );
};

CarsTable.defaultProps = {
  suspend: false
};

const HintPage: React.FC = () => (
  <Suspense fallback={<CarsTable suspend />}>
    <CarsTable />
  </Suspense>
);

export default HintPage;
