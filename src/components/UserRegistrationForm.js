import React, { useState, useEffect, useRef } from 'react';

import StyledUserRegistrationForm from './styles/StyledUserRegistrationForm';
import Button from './UI/Button';
import { useAuth } from '../contexts/AuthContext';
import Notification from './UI/Notification';
import { Link, useHistory } from 'react-router-dom';

export default () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  //Refs
  // const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const history = useHistory();

  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch (error) {
      setError('Failed to create an account');
    }

    setLoading(false);
  }

  useEffect(() => {
    if (error.length > 0) {
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
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          {/* <div className="formInput">
            <label htmlFor="name">Name</label>
            <input ref={nameRef} type="text" id="name" />
          </div> */}
          <div className="formInput">
            <label htmlFor="email">Email</label>
            <input ref={emailRef} type="email" id="email" />
          </div>
          <div className="formInput">
            <label htmlFor="password">Password</label>
            <input ref={passwordRef} type="password" id="password" required />
          </div>
          <div className="formInput">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              ref={passwordConfirmRef}
              type="password"
              id="confirmPassword"
              required
            />
          </div>

          <Button type="submit" label="Register" classes="primaryButton" />
        </form>
        <p>
          If you already have an account <Link to="/login">Log In</Link>
        </p>
      </div>
    </StyledUserRegistrationForm>
  );
};
