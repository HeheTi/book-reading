import LoginForm from './LoginForm';
import GoogleBtn from 'main/GoogleBtn';
import auth from 'data/authData.json';
import LoginDescInfo from './LoginDescInfo';
import BgImageAuth from 'main/BgImageAuth';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <BgImageAuth>
        <GoogleBtn />
        <LoginForm />
        <Link to="/registration">{auth.login.btnRegistration}</Link>
      </BgImageAuth>

      <div>
        <LoginDescInfo />
      </div>
    </div>
  );
};

export default Login;
