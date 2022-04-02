import axios from 'axios';

import { TRIVIA_BASE_URL } from '../utils/contants';

// console.log(TRIVIA_BASE_URL);
// export default axios.create({
//   baseURL: TRIVIA_BASE_URL,
// });

const instance = axios.create({ baseURL: TRIVIA_BASE_URL });
instance.interceptors.request.use((config) => config);
export default instance;

// Original
// https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean
// BUilt
// https://opentdb.com/api.php?/amount=10&difficulty=hard&type=boolean
