import React from 'react';
import { Field } from 'react-final-form';
import { combine } from 'redux-form-validators';

import { THandleSubmit } from 'types/forms';
import { required, carNumber } from 'helpers/validators';
import TextInput from 'components/TextInput';

import styles from './SearchForm.scss';

type TProps = { handleSubmit: THandleSubmit };

const SearchForm: React.FC<TProps> = ({ handleSubmit }: TProps) => (
  <form onSubmit={handleSubmit} className={styles.searchForm}>
    <Field
      name="search"
      validate={combine(required, carNumber)}
      component={TextInput}
      id="search"
      placeholder="Car number"
    />

    <button className={styles.submit} type="submit">
      Search
    </button>
  </form>
);

export default React.memo(SearchForm);
