import axios from 'axios';
import { ROOT_API_URL, API_KEY } from './configurations';

export const axiosInstance = axios.create({
  baseURL: ROOT_API_URL,
  // key: API_KEY,
  timeout: 1000
});
