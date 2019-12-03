import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ClientContextProvider } from 'react-fetching-library';

import store from 'store';
import Routes from 'containers/routes';
import { client } from 'helpers/fetch';

import './reset.css';

function render(Component: React.ElementType): void {
  ReactDOM.render((
    <Provider store={store}>
      <ClientContextProvider client={client}>
        <BrowserRouter basename={process.env.PUBLIC_PATH}>
          <Component />
        </BrowserRouter>
      </ClientContextProvider>
    </Provider>
  ), document.getElementById('root') as HTMLDivElement);
}

render(Routes);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./containers/routes', () => {
    const newRoutes = require('./containers/routes').default;
    render(newRoutes);
  });
}