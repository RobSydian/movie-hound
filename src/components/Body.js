import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Discover from './Discover';

const UnderConstruction = () => (
  <div>
    <h1 style={{ backgroundColor: 'white' }}>
      Page is currently under construction!
    </h1>
  </div>
);

export default () => (
  <Switch>
    <Route path="/" exact>
      <h1 style={{ backgroundColor: 'white' }}>Home</h1>
    </Route>
    <Route path="/discover">
      <Discover />
    </Route>
    <Route path="/my-list">
      <UnderConstruction />
    </Route>
    <Route path="/search">
      <UnderConstruction />
    </Route>
    <Route path="/profile">
      <UnderConstruction />
    </Route>
  </Switch>
);
