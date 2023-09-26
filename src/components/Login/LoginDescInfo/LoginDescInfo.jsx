import auth from 'data/authData.json';
import { ReactComponent as SpeechMark } from 'images/speechMark.svg';

const LoginDescInfo = () => {
  return (
    <>
      <SpeechMark />
      <p>{auth.login.info.desc}</p>
      <p>{auth.login.info.author}</p>
    </>
  );
};

export default LoginDescInfo;
