import React, { useState, useEffect, useRef } from 'react';

import StyledUserRegistrationForm from './styles/StyledUserRegistrationForm';
import Button from './UI/Button';
import { useAuth } from '../contexts/AuthContext';
import Notification from './UI/Notification';
import { Link, useHistory } from 'react-router-dom';

export default () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  //Refs
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch (error) {
      setError('Failed to log in');
    }

    setLoading(false);
  }

  useEffect(() => {
    if (error) {
      Notification({
        message: error,
        classes: 'notification-danger',
      });
      return;
    }
  }, [error]);

  return (
    <StyledUserRegistrationForm>
      <div className="formContainer">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="formInput">
            <label htmlFor="email">Email</label>
            <input ref={emailRef} type="email" id="email" />
          </div>
          <div className="formInput">
            <label htmlFor="password">Password</label>
            <input ref={passwordRef} type="password" id="password" required />
          </div>
          <Button type="submit" label="Login" classes="primaryButton" />
        </form>
        <p>
          If you don't have an account <Link to="/signup">Sign Up</Link>
        </p>
        <h3>
          <Link to="/forgot-password">Forgot Password?</Link>
        </h3>
      </div>
    </StyledUserRegistrationForm>
  );
};
