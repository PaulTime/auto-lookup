import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import createReduxPromiseListener from 'redux-promise-listener';

const reduxPromiseListener = createReduxPromiseListener();

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const store = createStore(
  combineReducers({ test: () => ({ a: 1 }) }),
  composeEnhancers(
    applyMiddleware(reduxPromiseListener.middleware),
  )
);
export const promiseListener = reduxPromiseListener; // <---- ⚠️ IMPORTANT ⚠️

export default store