import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'components/Root';

function render(Component: React.ElementType): void {
  ReactDOM.render(
    <Component />,
    document.getElementById('root') as HTMLDivElement
  );
}

render(Root);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/Root', () => {
    const newApp = require('./components/Root').default;
    render(newApp);
  });
}
