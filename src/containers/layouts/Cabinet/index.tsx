import React from 'react';

import Header from 'containers/blocks/Header';

import styles from './Cabinet.scss';

type TProps = {
  children: React.ReactNode;
};

const CabinetLayout: React.FC<TProps> = (props: TProps) => (
  <div className={styles.layout}>
    <Header />
    <main>{props.children}</main>
  </div>
);

export default React.memo(CabinetLayout);
