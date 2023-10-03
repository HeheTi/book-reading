import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LibraryPage = lazy(() => import('pages/LibraryPage'));

const AllRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/library" replace />} />
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="library"
          element={
            <PrivateRoute component={<LibraryPage />} redirectTo="/login" />
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute component={<LoginPage />} redirectTo="/library" />
          }
        />
        <Route
          path="registration"
          element={
            <PublicRoute component={<RegisterPage />} redirectTo="/library" />
          }
        />
      </Route>
      <Route path="/*" element={<Navigate to="/library" />} />
    </Routes>
  );
};

export default AllRouts;
