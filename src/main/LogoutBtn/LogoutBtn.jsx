import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const onClick = () => dispatch(logoutUser());

  return (
    <button type="button" onClick={onClick}>
      Logout
    </button>
  );
};

export default LogoutBtn;
