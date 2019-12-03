import {applyMiddleware, compose, createStore, Store} from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from 'ducks';

const composeEnhancers =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose
    || compose;

function configureStore(): Store {
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(
        thunk,
      ),
    ),
  );

  if (module.hot) {
    module.hot.accept('ducks', () => {
      store.replaceReducer(require('ducks').rootReducer);
    });
  }

  return store;
}

export type RootState = ReturnType<typeof rootReducer>
export default configureStore();
