import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ILoginFormValues } from '../login';
import { login } from './login.service';
import { setToken } from 'core/helpers/get-token';
import { store } from 'store/store.config';
import { setUser } from 'store/store.reducer';
import { Routes } from 'router/routes';

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (credentials: ILoginFormValues) => {
      return login(credentials);
    },
    onSuccess: response => {
      console.log('Mutation Success:', response.token);
      setToken('token');
      console.log(response);
      store.dispatch(setUser(response.email));
      navigate(Routes.home);
    },
    onError: error => {
      console.error('Mutation Error:', error);
    },
  });
};
