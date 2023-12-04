import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { IRegisterFormValues } from '../sign-up';
import { setToken } from 'core/helpers/get-token';
import { store } from 'store/store.config';
import { setUser } from 'store/store.reducer';
import { Routes } from 'router/routes';
import { register } from './sign-up.service';

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (credentials: IRegisterFormValues) => {
      return register(credentials);
    },
    onSuccess: response => {
      console.log('Mutation Success:', response.token);
      setToken('token');
      store.dispatch(setUser(response));
      navigate(Routes.home);
    },
    onError: error => {
      console.error('Mutation Error:', error);
    },
  });
};
