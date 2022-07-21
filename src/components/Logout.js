import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from './UI/Button';

export default function Logout() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function logoutHandler() {
    setError('');

    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to log out');
    }

    console.log('logout clicked', currentUser);
  }
  return (
    <Button
      func={logoutHandler}
      label="Logout"
      type="button"
      classes="removeFromList"
    />
  );
}
