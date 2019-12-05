import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ClientContextProvider } from 'react-fetching-library';

import store from 'store';
import { getAPIClient } from 'resources/api';

import App from './App';

import './reset.css';

const Root: React.FC = () => (
  <Provider store={store}>
    <ClientContextProvider client={getAPIClient()}>
      <BrowserRouter basename={process.env.PUBLIC_PATH}>
        <App />
      </BrowserRouter>
    </ClientContextProvider>
  </Provider>
);

export default Root;
