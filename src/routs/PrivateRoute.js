import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthRefreshToken } from 'redux/auth/authSelectors';

const PrivateRoute = ({ redirectTo = '/', component: Component }) => {
  const token = useSelector(selectAuthRefreshToken);
  return token ? Component : <Navigate to={redirectTo} />;
};

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
  component: PropTypes.node,
};

export default PrivateRoute;
