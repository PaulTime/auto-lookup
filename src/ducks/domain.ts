import { createAction, handleActions } from 'redux-actions';
import { Action } from 'react-fetching-library';

type TSetResourcePayload = Action<{ namespace: string }>;
type TDomainReducer = { [key: string]: TSetResourcePayload };

export const setResource = createAction<TSetResourcePayload>('SET_RESOURCE');

export default handleActions<TDomainReducer, TSetResourcePayload>(
  {
    [setResource.toString()]: (state, { payload }) => ({
      ...state,
      [payload.namespace]: payload
    })
  },
  {}
);
