import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { IRegisterFormValues } from '../sign-up';
import { store } from 'store/store.config';
import { setUser } from 'store/store.reducer';
import { Routes } from 'router/routes';
import { signup } from './sign-up.service';

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (credentials: IRegisterFormValues) => {
      return signup(credentials);
    },
    onSuccess: response => {
      console.log('Mutation Success:', response.token);
      store.dispatch(setUser(response));
      navigate(Routes.login);
    },
    onError: error => {
      console.error('Mutation Error:', error);
    },
  });
};
