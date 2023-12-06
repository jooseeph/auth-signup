import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Routes } from '../routes';
import { IAuthProtectedRouteProps } from './auth-protected';
import { getToken } from '../../core/helpers/get-token';
import { useEffect } from 'react';
import { setUser } from '../../store/store.reducer';
import { useStore } from 'store/store.config';
const AuthProtectedComponent = ({
  children,
  layout = 'public',
}: IAuthProtectedRouteProps) => {
  const dispatch = useDispatch();

  const user = useStore('user');

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, []);
  switch (layout) {
    case 'public':
      return getToken() ? <Navigate to={Routes.home} replace /> : children;
    case 'auth':
      return getToken() ? children : <Navigate to={Routes.login} replace />;
    default:
      return children;
  }
};

export default AuthProtectedComponent;
