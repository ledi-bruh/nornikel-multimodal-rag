import axios from 'axios';
import envs from '../../config/environments';
import { Flip, toast } from 'react-toastify';

const instance = axios.create({
  baseURL: envs.baseApiUrl
});

instance.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    toast.error(error.response.data.message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: 'light',
      transition: Flip
    });
    return Promise.reject(error);
  }
);

export default instance;
