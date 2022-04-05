import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import QuestionCard from '../../components/Question/QuestionCard';
import { IQuestionContext } from '../../interfaces/IQuestion';

import QuestionContext from '../../store/contexts/QuestionContext';
import Error from '../Error';

const Question = () => {
  const { questionId } = useParams<{ questionId: string }>();
  const questionContext = useContext(QuestionContext) as IQuestionContext;
  const navigate = useNavigate();

  if (!questionId) return (<Loading />);
  if (questionContext.loading) return (<Loading />);
  if (questionContext.error) return (<Error />);

  const getPageNextNumber = (id: string): number => parseInt(id, 10) + 1;

  const getPage = (id: number) => {
    if (id < 11) {
      navigate(`/question/${id}`);
    } else {
      navigate('/result');
    }
  };

  const handleNextQuestion = (choice: string) => {
    const nextPageNumber = getPageNextNumber(questionId);
    getPage(nextPageNumber);
    questionContext.getCurrentQuestion(nextPageNumber);
    if (questionContext.currentQuestion) {
      questionContext.scoreQuestion(choice, questionContext.currentQuestion);
    }
  };

  return (
    <>
      {
        questionContext.questions && questionContext.currentQuestion
        && (
          <>
            <QuestionCard
              questionNumber={getPageNextNumber(questionId)}
              question={questionContext.currentQuestion}
              handleNextQuestion={handleNextQuestion}
            />
          </>
        )
      }
    </>
  );
};

export default Question;
