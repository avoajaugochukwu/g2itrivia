import React from 'react';
import { IQuestionContext } from '../../interfaces/IQuestion';

const QuestionContext = React
  .createContext<IQuestionContext | null>(null);

export default QuestionContext;
// const getLocalStorage = (storeKey) => {
//   if (typeof window !== 'undefined') {
//     const getData = window.localStorage.getItem(`bycking_${storeKey}`)
//       ? JSON.parse(window.localStorage.getItem(`bycking_${storeKey}`))
//       : [];
//     return getData;
//   }
//   return [];
// };

// const setLocalStorage = (storeKey, valueToStore) => {
//   if (!storeKey) return;
//   if (typeof window !== 'undefined') {
//     window.localStorage.setItem(
//       `bycking_${storeKey}`,
//       JSON.stringify(valueToStore),
//     );
//   }
// };
