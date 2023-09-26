import LoginForm from './LoginForm';
import GoogleBtn from 'main/GoogleBtn';
import auth from 'data/authData.json';
import LoginDescInfo from './LoginDescInfo';

const Login = () => {
  return (
    <div>
      <div>
        <GoogleBtn />
        <LoginForm />
        <a href="/">{auth.login.btnRegistration}</a>
      </div>
      <div>
        <LoginDescInfo />
      </div>
    </div>
  );
};

export default Login;
