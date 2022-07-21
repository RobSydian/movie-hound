import React, { useState, useEffect, useRef } from 'react';

import StyledUserRegistrationForm from './styles/StyledUserRegistrationForm';
import Button from './UI/Button';
import { useAuth } from '../contexts/AuthContext';
import Notification from './UI/Notification';
import { Link } from 'react-router-dom';

export default () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  //Refs
  const emailRef = useRef();

  const { resetPassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      Notification({
        message: 'Check your email for further instructions',
        classes: 'notification-info',
      });
    } catch (error) {
      setError('Failed to reset password');
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
        <h1>Password Reset</h1>
        <form onSubmit={handleSubmit}>
          <div className="formInput">
            <label htmlFor="email">Email</label>
            <input ref={emailRef} type="email" id="email" required />
          </div>
          <Button
            type="submit"
            label="Reset Password"
            classes="primaryButton"
          />
        </form>
        <Link to="/login">Login</Link>
        <p>
          If you don't have an account <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </StyledUserRegistrationForm>
  );
};
