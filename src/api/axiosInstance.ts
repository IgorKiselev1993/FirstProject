import axios from 'axios';
import {apiKey, apiURL} from '../config/configENV.ts';

export const axiosInstance = axios.create({
  baseURL: apiURL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(config => {
  config.params = {
    ...(config.params || {}),
    appid: apiKey,
    lang: 'ru',
    units: 'metric',
  };
  return config;
});

axiosInstance.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);
