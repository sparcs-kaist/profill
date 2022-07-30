import axios from 'axios';

const instance = axios.create({
  baseURL: `http://localhost:8000/api`,
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
