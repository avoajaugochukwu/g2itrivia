import axios from 'axios';

import { TRIVIA_BASE_URL } from '../utils/contants';

const instance = axios.create({ baseURL: TRIVIA_BASE_URL });
instance.interceptors.request.use((config) => config);
export default instance;
