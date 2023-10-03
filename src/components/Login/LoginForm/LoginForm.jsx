import { useState } from 'react';
import { useDispatch } from 'react-redux';
import auth from 'data/authData.json';
import { loginUser } from 'redux/auth/authOperations';

const LoginForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onHandlerSubmit = e => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    console.log({ email, password });
    dispatch(loginUser({ email, password }));
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

      <label htmlFor="login-password">{auth.pass.title}</label>
      <input
        type="password"
        name="password"
        id="login-password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder={auth.pass.placeholder}
      />
      <button type="submit">{auth.login.btnIn}</button>
    </form>
  );
};

export default LoginForm;
