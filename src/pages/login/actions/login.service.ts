import { API } from 'core/configs/api.config';
import axiosInstance from 'core/configs/axios.config';
import { ILoginFormValues } from '../login';
import { error } from 'console';

export const login = (
  credentials: ILoginFormValues
): Promise<{ token: string }> => {
  return axiosInstance
    .get(API.post)
    .then(res => {
      const matchedUser = res.data.find(
        (user: any) =>
          user.email === credentials.email &&
          user.password === credentials.password
      );

      return matchedUser && res.data;
    })
    .catch(error => {
      throw error;
    });
};
