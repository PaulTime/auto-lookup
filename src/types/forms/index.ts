import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TValidator<Value = any> = {
  (V: Value): () => string | undefined;
};

export type THandleSubmit = (
  event?: React.SyntheticEvent<HTMLFormElement>
) => Promise<object | undefined> | undefined;

export type TOnSubmit = (
  values?: object
) => Promise<object | undefined> | undefined | void;
