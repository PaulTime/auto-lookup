import React, { Suspense } from 'react';

import { useLocationWithQuery } from 'hooks';
import { useSuspenseQuery } from 'hooks/fetch';
import {
  getCarsRecourse,
  TCarInfoResourceParams,
  TCarInfoResource
} from 'resources/carInfo';

import styles from './Hint.scss';

type TCarsTable = { suspend?: boolean };

const CarsTable: React.FC<TCarsTable> = ({ suspend }: TCarsTable) => {
  const { query } = useLocationWithQuery<TCarInfoResourceParams>();

  const { payload = {} } = useSuspenseQuery<{ result?: TCarInfoResource }>(
    getCarsRecourse(query),
    Boolean(query.search) && !suspend
  );

  return (
    <table className={styles.root}>
      <caption className={styles.caption}>Search result</caption>

      <thead className={styles.head}>
        <tr>
          <th>owner</th>
          <th>year</th>
          <th>crashesCount</th>
          <th>ownersCount</th>
        </tr>
      </thead>

      <tbody className={styles.body}>
        <tr>
          {payload.result ? (
            Object.entries(payload.result).map(([field, value]) => (
              <td key={field}>
                <span>{value}</span>
              </td>
            ))
          ) : (
            <td colSpan={4}>
              <span className={styles.placeholder}>try to search cars</span>
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
