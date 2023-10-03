import GoogleBtn from 'main/GoogleBtn';
import RegisterForm from './RegisterForm';
import RegisterDescInfo from './RegisterDescInfo';
import auth from 'data/authData.json';
import BgImageAuth from 'main/BgImageAuth';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <BgImageAuth>
        <GoogleBtn />
        <RegisterForm />
        <Link to="/login">
          {auth.register.ask} <span>{auth.register.btnRIn}</span>
        </Link>
      </BgImageAuth>

      <div>
        <RegisterDescInfo />
      </div>
    </div>
  );
};

export default Register;
