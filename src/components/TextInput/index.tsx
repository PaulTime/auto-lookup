import React from 'react';
import { FieldInputProps, FieldMetaState } from 'react-final-form';

import styles from './TextInput.scss';

type TProps = {
  input: FieldInputProps<string, HTMLInputElement>;
  meta: FieldMetaState<string>;
  id: string;
  placeholder?: string;
};

const TextInput: React.FC<TProps> = ({
  input,
  meta,
  id,
  placeholder
}: TProps) => (
  <label htmlFor={id} className={styles.root}>
    <input type="text" {...input} id={id} placeholder={placeholder} />

    {meta.touched && meta.error && (
      <span className={styles.error}>{meta.error}</span>
    )}
  </label>
);

TextInput.defaultProps = {
  placeholder: undefined
};

export default TextInput;
