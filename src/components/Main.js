import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ChelaGrid from './ChelaGrid';
import ChelaView from './ChelaView';
import NoMatch from './NoMatch';

const Main = () => (
  <Switch>
    <Route exact path="/" component={ChelaGrid} />
    <Route path="/view/:chelaId" component={ChelaView} />
    <Route component={NoMatch} />
  </Switch>
);

export default Main;