import React, { useState, useEffect } from 'react';

import StyledUserRegistrationForm from './styles/StyledUserRegistrationForm';
import { sendRegistrationFormData } from '../api';

// let handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     let res = await fetch('https://httpbin.org/post', {
//       method: 'POST',
//       body: JSON.stringify(body),
//     });
//     let resJson = await res.json();
//     if (res.status === 200) {
//       setName('');
//       setSurname1('');
//       setSurname2('');
//       setEmail('');
//       setPassword('');
//       setMessage('User created successfully');
//     } else {
//       setMessage('Some error occured');
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

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
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={surname1}
            placeholder="first surname"
            onChange={(e) => setSurname1(e.target.value)}
          />
          <input
            type="text"
            value={surname2}
            placeholder="second surname"
            onChange={(e) => setSurname2(e.target.value)}
          />
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </StyledUserRegistrationForm>
  );
};
