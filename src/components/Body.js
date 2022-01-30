import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Discover from './Discover';
import Genres from './Genres';
import Home from './Home';
import MovieProfile from './MovieProfile';
import SearchPage from './SearchPage';
import UserRegistrationForm from './UserRegistrationForm';
import StyledBody from './styles/StyledBody';

const UnderConstruction = () => (
  <div>
    <h1 style={{ backgroundColor: 'white' }}>
      Page is currently under construction!
    </h1>
  </div>
);

export default () => (
  <StyledBody>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/discover">
        <Discover />
      </Route>
      <Route path="/my-list">
        <UnderConstruction />
      </Route>
      <Route path="/search">
        <SearchPage />
      </Route>
      <Route path="/profile">
        <SearchPage />
      </Route>
      <Route path={'/details/:id'}>
        <MovieProfile />
      </Route>
      <Route path={'/genres'}>
        <Genres />
      </Route>
      <Route path={'/userRegistrationForm'}>
        <UserRegistrationForm />
      </Route>
    </Switch>
  </StyledBody>
);
