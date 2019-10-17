import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from 'store';
import Routes from 'containers/routes';

import './reset.css';

function render(Component: React.ElementType): void {
  ReactDOM.render((
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_PATH}>
        <Component />
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root') as HTMLDivElement);
}

render(Routes);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./containers/routes', () => {
        const newRoutes = require('./containers/routes').default; // eslint-disable-line
    render(newRoutes);
  });
}