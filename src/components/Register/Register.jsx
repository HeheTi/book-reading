import GoogleBtn from 'main/GoogleBtn';
import RegisterForm from './RegisterForm';
import RegisterDescInfo from './RegisterDescInfo';
import auth from 'data/authData.json';

const Register = () => {
  return (
    <div>
      <div>
        <GoogleBtn />
        <RegisterForm />
        <a href="/">
          {auth.register.ask} <span>{auth.register.btnRIn}</span>
        </a>
      </div>
      <div>
        <RegisterDescInfo />
      </div>
    </div>
  );
};

export default Register;
