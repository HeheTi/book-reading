import LoginForm from './LoginForm';
import GoogleBtn from 'main/GoogleBtn';
import auth from 'data/authData.json';
import LoginDescInfo from './LoginDescInfo';
import BgImageAuth from 'main/BgImageAuth';

const Login = () => {
  return (
    <div>
      <BgImageAuth>
        <GoogleBtn />
        <LoginForm />
        <a href="/">{auth.login.btnRegistration}</a>
      </BgImageAuth>

      <div>
        <LoginDescInfo />
      </div>
    </div>
  );
};

export default Login;
