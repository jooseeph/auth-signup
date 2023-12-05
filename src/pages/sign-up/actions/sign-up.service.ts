import { API } from 'core/configs/api.config';
import axiosInstance from 'core/configs/axios.config';
import { IRegisterFormValues } from '../sign-up';


export const signup = (
  credentials: IRegisterFormValues
): Promise<{ token: string }> => {
  return axiosInstance
    .post(API.post, credentials)
    .then(res => {
      console.log('Server Response:', res.data);
      return res.data;
    })
    .catch(error => {
      console.error('Server Error:', error);
      throw error;
    });
};
