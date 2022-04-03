import React from 'react';
import { IQuestionState } from '../../interfaces/IQuestion';

// export interface IQuestionContext {
//   questions: null | IQuestion[];
//   loading: boolean;
//   error: null | string;
//   currentQuestion: null | IQuestion;
//   nextQuestion: () => void
// }

const questionContext: IQuestionState = {
  questions: [],
  loading: false,
  error: null,
  currentQuestionId: 1,
  currentQuestion: null,
  getCurrentQuestion: () => {},
  scoreQuestion: () => {},
};

const QuestionContext = React
  .createContext<IQuestionState>(questionContext);

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
