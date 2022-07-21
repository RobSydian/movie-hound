import React, { useState, useEffect, useRef } from 'react';

import StyledUserRegistrationForm from './styles/StyledUserRegistrationForm';
import Button from './UI/Button';
import { useAuth } from '../contexts/AuthContext';
import Notification from './UI/Notification';
import { Link, useHistory } from 'react-router-dom';
import Logout from './Logout';

export default () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showButton, setShowButton] = useState(false);

  //Refs
  // const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const history = useHistory();

  const { currentUser, updatePassword, updateEmail } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError('Passwords do not match');
    }

    const promises = [];

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push('/');
      })
      .catch(() => {
        setError('Failed to update account');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function showButtonHandler() {
    setShowButton(true);
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
        <h1>Update Profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="formInput">
            <label htmlFor="email">Email</label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              defaultValue={currentUser.email}
              onChange={showButtonHandler}
            />
          </div>
          <div className="formInput">
            <label htmlFor="password">Password</label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              placeholder="Leave blank to keep the same"
            />
          </div>
          <div className="formInput">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              ref={passwordConfirmRef}
              type="password"
              id="confirmPassword"
              placeholder="Leave blank to keep the same"
            />
          </div>
          <div className="btn-panel">
            <Link to="/">
              <Button label="Cancel" classes="secondaryButton" />
            </Link>
            {showButton && (
              <Button type="submit" label="Update" classes="primaryButton" />
            )}
          </div>
        </form>
      </div>
      <Logout />
    </StyledUserRegistrationForm>
  );
};
