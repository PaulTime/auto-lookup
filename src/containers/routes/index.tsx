import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CabinetLayout from 'containers/layouts/Cabinet';
import HintPage from 'containers/pages/Hint';

const Routes: React.FC = () => (
  <Switch>
    <Route>
      <CabinetLayout>
        <Switch>
          <Route component={HintPage}/>
        </Switch>
      </CabinetLayout>
    </Route>
  </Switch>
);

export default Routes;