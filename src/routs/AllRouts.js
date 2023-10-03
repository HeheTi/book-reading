import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';

const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LibraryPage = lazy(() => import('pages/LibraryPage'));

const AllRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/library" replace />} />
      <Route path="/" element={<SharedLayout />}>
        <Route path="library" element={<LibraryPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registration" element={<RegisterPage />} />
      </Route>
      <Route path="/*" element={<Navigate to="/library" />} />
    </Routes>
  );
};

export default AllRouts;
