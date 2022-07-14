import React, { useState, useEffect } from 'react';

import StyledUserRegistrationForm from './styles/StyledUserRegistrationForm';
import Button from './UI/Button';
import { sendRegistrationFormData } from '../api';

export default () => {
  const [name, setName] = useState('');
  const [surname1, setSurname1] = useState('');
  const [surname2, setSurname2] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let body = JSON.stringify({
        firstName: name,
        surname: surname1,
        secondSurname: surname2,
        email: email,
        password: password,
      });
      const res = await sendRegistrationFormData(body);

      let resJson = await res.json();
      if (res.status === 200) {
        setName('');
        setSurname1('');
        setSurname2('');
        setEmail('');
        setPassword('');
        setMessage('User created successfully');
      } else {
        setMessage('Some error occured');
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <StyledUserRegistrationForm>
      <div className="formContainer">
        <h1>Registration Form</h1>
        <div className="message">{message ? <p>{message}</p> : null}</div>
        <form onSubmit={handleSubmit}>
          <div className="formInput">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="formInput">
            <label htmlFor="surname1">First surname</label>
            <input
              type="text"
              id="surname1"
              value={surname1}
              onChange={(e) => setSurname1(e.target.value)}
            />
          </div>
          <div className="formInput">
            <label htmlFor="surname2">Second surname</label>
            <input
              type="text"
              id="surname2"
              value={surname2}
              onChange={(e) => setSurname2(e.target.value)}
            />
          </div>
          <div className="formInput">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="formInput">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button type="submit" label="Register" classes="primaryButton">
            Register
          </Button>
        </form>
      </div>
    </StyledUserRegistrationForm>
  );
};
