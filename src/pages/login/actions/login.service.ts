import { API } from 'core/configs/api.config';
import axiosInstance from 'core/configs/axios.config';
import { ILoginFormValues } from '../login';

export const login = (
  credentials: ILoginFormValues
): Promise<{ token: string }> => {
  return axiosInstance
    .post(API.posts, credentials)
    .then(res => {
      console.log('Server Response:', res.data); // Kontrol amaçlı log
      return res.data;
    })
    .catch(error => {
      console.error('Server Error:', error); // Hata ayıklama amaçlı log
      throw error; // Hata iletmek için
    });
};
