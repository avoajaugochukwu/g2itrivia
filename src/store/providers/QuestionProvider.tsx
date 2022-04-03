import React, {
  useEffect, ReactNode, FC, useState,
} from 'react';
import useQuestions from '../../hooks/useQuestions';
import IQuestion from '../../interfaces/IQuestion';
// import IQuestion from '../../interfaces/IQuestion';
import QuestionContext from '../contexts/QuestionContext';

// export interface IQuestionContext {
//   questions: null | IQuestion[];
//   loading: boolean;
//   error: null | string;
//   currentQuestionId: number;
//   // updateCurrentQuestionId: () => void
// }

type Props = { children: ReactNode };

const QuestionProvider: FC<Props> = ({ children }) => {
  // const [questions, setQuestions] = useState([]);

  const [result, setResult] = useState<IQuestion[] | null>();
  const [{ questions, loading, error }, fetchQuestions] = useQuestions();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);
  const [currentQuestion, setCurrentQuestion] = useState<null | IQuestion>(null);

  const getCurrentQuestion = (): void => {
    if (questions) {
      setCurrentQuestion(questions[currentQuestionId - 1]);
      setCurrentQuestionId(currentQuestionId + 1);
    }
  };

  if (!questions) return (<h1>Loading</h1>);
  if (!result) return (<h1>Loading</h1>);

  const scoreQuestion = (choice: boolean, question: IQuestion) => {
    console.log(choice, 'choice');
    console.log(question, 'IQuestion');
    const a = questions?.filter((q) => q.question === question.question);
    const b = [...result, ...a];
    setResult(b);
    console.log(a);
  };

  // Usecallback so that it won't run again
  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (questions && questions?.length > 0) {
      setCurrentQuestion(questions[currentQuestionId - 1]);
    }
  }, [loading]);

  return (
    <QuestionContext.Provider value={{
      questions,
      loading,
      error,
      currentQuestionId,
      currentQuestion,
      getCurrentQuestion,
      scoreQuestion,
    }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
