import { createAction, handleActions } from 'redux-actions';

export const setAuthorized = createAction('SET_AUTHORIZED');
export const setAuthToken = createAction('SET_AUTH_TOKEN');
export const setRefreshToken = createAction('SET_REFRESH_TOKEN');

export default handleActions({
  [setAuthorized.toString()]: (state, { payload }) => ({ ...state, isAuthorized: Boolean(payload) }),
  [setAuthToken.toString()]: (state, { payload }) => ({ ...state, authToken: String(payload) }),
  [setRefreshToken.toString()]: (state, { payload }) => ({ ...state, refreshToken: String(payload) }),
}, {
  isAuthorized: false,
  authToken: '',
  refreshToken: '',
});