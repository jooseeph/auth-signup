import { environment } from '../configs/app.config';

export const getToken = (): string | null => {
  return localStorage.getItem(`${environment.applicationName}-token`);
};

export const setToken = (token: any) => {
  localStorage.setItem(`${environment.applicationName}-token`, token);
};

export const removeToken = () => {
  localStorage.clear();
};
