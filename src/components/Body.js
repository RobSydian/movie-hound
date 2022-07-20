import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Discover from './pages/Discover';
import Genres from './pages/Genres';
import Home from './pages/Home';
import MovieProfile from './pages/MovieProfile';
import SearchPage from './SearchPage';
import MyList from './pages/MyList';
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
        <MyList />
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
