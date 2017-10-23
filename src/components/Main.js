import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ChelaGrid from './ChelaGrid';
import ChelaView from './ChelaView';

const Main = () => (
  <Switch>
    <Route exact path="/" component={ChelaGrid} />
    <Route path="/view/:chelaId" component={ChelaView} />
  </Switch>
);

export default Main;