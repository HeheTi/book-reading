import GoogleBtn from 'main/GoogleBtn';
import RegisterForm from './RegisterForm';
import RegisterDescInfo from './RegisterDescInfo';
import auth from 'data/authData.json';
import BgImageAuth from 'main/BgImageAuth';

const Register = () => {
  return (
    <div>
      <BgImageAuth>
        <GoogleBtn />
        <RegisterForm />
        <a href="/">
          {auth.register.ask} <span>{auth.register.btnRIn}</span>
        </a>
      </BgImageAuth>

      <div>
        <RegisterDescInfo />
      </div>
    </div>
  );
};

export default Register;
