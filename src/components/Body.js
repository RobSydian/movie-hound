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
import Login from './Login';
import UpdateProfile from './UpdateProfile';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import Logout from './Logout';

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
      <Route path="/" exact component={Home} />
      <PrivateRoute path="/discover" component={Discover} />
      <PrivateRoute path="/my-list" component={MyList} />
      <Route path="/search" component={SearchPage} />
      <Route path="/profile" component={SearchPage} />
      <Route path={'/details/:id'} component={MovieProfile} />
      <Route path={'/genres'} component={Genres} />
      <Route path={'/signup'} component={UserRegistrationForm} />
      <Route path={'/login'} component={Login} />
      <Route path={'/logout'} component={Logout} />
      <Route path={'/forgot-password'} component={ForgotPassword} />
      <Route path={'/update-profile'} component={UpdateProfile} />
    </Switch>
  </StyledBody>
);
