import React from 'react';
import { Form } from 'react-final-form';
import { useHistory } from 'react-router-dom';
import qs from 'query-string';

import { TOnSubmit } from 'types/forms';
import { useLocation } from 'helpers/hooks';
import BEM from 'services/bem';
import SearchForm from 'containers/forms/Search';

import './index.scss';

const bem = BEM('header');

const Header: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const onsubmit: TOnSubmit = (values) => {
    history.replace(`${location.pathname}?${qs.stringify(values)}`);
  };

  return (
    <header className={bem()}>
      <h1 className={bem('title')}>header block</h1>

      <Form
        onSubmit={onsubmit}
        component={SearchForm}
        initialValues={qs.parse(location.search)}
      />
    </header>
  )
};

export default Header;