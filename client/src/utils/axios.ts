import axios from 'axios';
import { BASE_URL } from '../component/config';

const instance = axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true,
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('profill-jwt');

  if (token)
    config.headers = {
      'Authorization': `Bearer ${token}`,
    };

  return config;
});

export default instance;
