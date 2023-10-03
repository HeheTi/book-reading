import { Link } from 'react-router-dom';
import s from './Logo.module.css';

const Logo = () => {
  return (
    <Link to="/" className={s.logo}>
      BR
    </Link>
  );
};

export default Logo;
