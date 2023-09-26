import React, { useState } from 'react';
import auth from 'data/authData.json';

const LoginForm = props => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const onHandlerSubmit = e => {
    e.preventDefault();
    console.log({ email, pass });
  };

  return (
    <form onSubmit={onHandlerSubmit}>
      <label htmlFor="login-email">{auth.email.title}</label>
      <input
        type="text"
        name="email"
        id="login-email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder={auth.email.placeholder}
      />

      <label htmlFor="login-pass">{auth.pass.title}</label>
      <input
        type="pass"
        name="pass"
        id="login-pass"
        value={pass}
        onChange={e => setPass(e.target.value)}
        placeholder={auth.pass.placeholder}
      />
      <button type="submit">{auth.login.btnIn}</button>
    </form>
  );
};

export default LoginForm;
