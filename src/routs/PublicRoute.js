import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthRefreshToken } from 'redux/auth/authSelectors';

const PublicRoute = ({ redirectTo = '/', component: Component }) => {
  const token = useSelector(selectAuthRefreshToken);
  return token ? <Navigate to={redirectTo} replace /> : Component;
};

PublicRoute.propTypes = {
  redirectTo: PropTypes.string,
  component: PropTypes.node,
};

export default PublicRoute;
