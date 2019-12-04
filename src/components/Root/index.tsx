import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ClientContextProvider } from 'react-fetching-library';

import store from 'store';
import Routes from 'containers/routes';
import { getAPIClient } from 'resources/api';

import './reset.css';

const Root: React.FC = () => (
  <Provider store={store}>
    <ClientContextProvider client={getAPIClient()}>
      <BrowserRouter basename={process.env.PUBLIC_PATH}>
        <Routes />
      </BrowserRouter>
    </ClientContextProvider>
  </Provider>
);

export default Root;
