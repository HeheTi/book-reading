import { useState } from 'react';
import { useDispatch } from 'react-redux';
import auth from 'data/authData.json';
import { registarionUser } from 'redux/auth/authOperations';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const dispatch = useDispatch();

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setRepeatPassword('');
  };

  const onHandleSubmit = e => {
    e.preventDefault();

    if (!name || !email || !password) {
      return;
    }

    if (password !== repeatPassword) {
      console.log(`need the same password`);
      return;
    }
    console.log({ name, email, password, repeatPassword });
    dispatch(registarionUser({ name, email, password, repeatPassword }));
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label htmlFor="register-name">{auth.name.title}</label>
      <input
        type="text"
        name="name"
        id="register-name"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder={auth.name.placeholder}
      />

      <label htmlFor="register-email">{auth.email.title}</label>
      <input
        type="text"
        name="email"
        id="register-email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder={auth.email.placeholder}
      />

      <label htmlFor="register-password">{auth.pass.title}</label>
      <input
        type="password"
        name="password"
        id="register-password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder={auth.pass.placeholder}
      />

      <label htmlFor="register-repeat-password">
        {auth.repeatPassword.title}
      </label>
      <input
        type="password"
        name="repeatPassword"
        id="register-repeat-password"
        value={repeatPassword}
        onChange={e => setRepeatPassword(e.target.value)}
        placeholder={auth.repeatPassword.placeholder}
      />

      <button>{auth.register.btnRegistr}</button>
    </form>
  );
};

export default RegisterForm;
