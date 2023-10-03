import Logo from 'main/Logo';
import LogoutBtn from 'main/LogoutBtn';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <Logo />
        <div>
          <LogoutBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
