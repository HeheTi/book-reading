import { ReactComponent as GoogleIcon } from 'images/googleIcon.svg';
import s from './GoogleBtn.module.css';

const GoogleBtn = () => {
  return (
    <>
      <button type="buton" className={s.googleBtn}>
        <GoogleIcon width="18" height="18" />
        Google
      </button>
    </>
  );
};

export default GoogleBtn;
