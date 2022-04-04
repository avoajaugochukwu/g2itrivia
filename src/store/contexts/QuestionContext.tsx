import React from 'react';
import { IQuestionContext } from '../../interfaces/IQuestion';

const QuestionContext = React
  .createContext<IQuestionContext | null>(null);

export default QuestionContext;
