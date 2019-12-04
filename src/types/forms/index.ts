import React from 'react';

export type TValue<V = any> = V; // eslint-disable-line @typescript-eslint/no-explicit-any
export type TError<E = string | undefined> = E;
export type TValidator<Value = TValue, E = TError> = { (V: Value): E };

export type THandleSubmit = (
  event?: React.SyntheticEvent<HTMLFormElement>
) => Promise<object | undefined> | undefined;

export type TOnSubmit = (
  values?: object
) => Promise<object | undefined> | undefined | void;
