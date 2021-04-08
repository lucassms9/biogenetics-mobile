import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import { SERVER_URL } from '~/configs/constantes';

const api = axios.create({
  // baseURL: 'http://biogenetics.test/api/',
  // baseURL: 'http://covidexpress.com.br/api/',
  baseURL: `${SERVER_URL}/api/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('@RNAuth:token');

  const headers = { ...config.headers };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return {
    ...config,
    headers,
  };
});

export default api;
