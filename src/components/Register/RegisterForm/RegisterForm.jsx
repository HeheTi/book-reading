import { useState } from 'react';
import auth from 'data/authData.json';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [verifyPass, setVerifyPass] = useState('');

  const onHandleSubmit = e => {
    e.preventDefault();
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

      <label htmlFor="register-pass">{auth.pass.title}</label>
      <input
        type="text"
        name="pass"
        id="register-pass"
        value={pass}
        onChange={e => setPass(e.target.value)}
        placeholder={auth.pass.placeholder}
      />

      <label htmlFor="register-verify-pass">{auth.verifyPass.title}</label>
      <input
        type="text"
        name="verifyPass"
        id="register-verify-pass"
        value={verifyPass}
        onChange={e => setVerifyPass(e.target.value)}
        placeholder={auth.verifyPass.placeholder}
      />

      <button>{auth.register.btnRegistr}</button>
    </form>
  );
};

export default RegisterForm;
