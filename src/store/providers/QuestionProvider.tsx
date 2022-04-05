import React, {
  useEffect, ReactNode, FC, useState,
} from 'react';
import useQuestions from '../../hooks/useQuestions';
import IQuestion, { IResult } from '../../interfaces/IQuestion';
import QuestionContext from '../contexts/QuestionContext';

type Props = { children: ReactNode };

const QuestionProvider: FC<Props> = ({ children }) => {
  const [result, setResult] = useState<IResult[]>([]);
  const [{ questions = [], loading = false, error = null }, fetchQuestions] = useQuestions();
  const [currentQuestion, setCurrentQuestion] = useState<null | IQuestion>(null);

  const getCurrentQuestion = (id: number): void => {
    if (questions) {
      setCurrentQuestion(questions[id - 1]);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (questions && questions?.length > 0) {
      setCurrentQuestion(questions[0]);
    }
  }, [loading]);

  const scoreQuestion = (choice: string, question: IQuestion) => {
    if (result && questions) {
      const filteredQuestion = questions.filter((q) => q.question === question.question);
      const firstQuestion = filteredQuestion[0];
      const newResult = [...result, {
        isCorrect: firstQuestion.correct_answer === choice,
        question: firstQuestion.question,
      }];
      setResult(newResult);
    }
  };

  return (
    <QuestionContext.Provider value={{
      questions,
      loading,
      error,
      currentQuestion,
      getCurrentQuestion,
      scoreQuestion,
      result,
    }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
