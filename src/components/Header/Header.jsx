import Logo from 'main/Logo';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
