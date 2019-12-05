import React from 'react';
import { useHistory } from 'react-router';
import { Form } from 'react-final-form';
import qs from 'query-string';

import { TOnSubmit } from 'types/forms';
import { useLocationWithQuery } from 'hooks';
import SearchForm from 'containers/forms/Search';

import styles from './Header.scss';

const Header: React.FC = () => {
  const history = useHistory();
  const { pathname, query } = useLocationWithQuery();

  const onsubmit: TOnSubmit = values => {
    history.replace(`${pathname}?${qs.stringify(values)}`);
  };

  return (
    <header className={styles.header}>
      <h1>header block</h1>

      <Form onSubmit={onsubmit} component={SearchForm} initialValues={query} />
    </header>
  );
};

export default Header;
