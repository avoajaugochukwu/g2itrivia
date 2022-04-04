/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import QuestionCard from '../../components/Question/QuestionCard';
import { IQuestionContext } from '../../interfaces/IQuestion';

import QuestionContext from '../../store/contexts/QuestionContext';

const Question = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { questionId } = useParams<{ questionId: string }>();
  const questionContext = useContext(QuestionContext) as IQuestionContext;
  const navigate = useNavigate();

  if (!questionId) return (<Loading />);

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
    // console.log(choice, 'choice');
    // if (!questionContext.setCurrentQuestionId) return;
    // const newCurrentId = questionContext?.currentQuestionId + 1;
    // questionContext.setCurrentQuestionId(newCurrentId);
    questionContext.getCurrentQuestion(nextPageNumber);
    if (questionContext.currentQuestion) {
      questionContext.scoreQuestion(choice, questionContext.currentQuestion);
    }
    // navigate(`/question/${questionContext.currentQuestionId}`);
    // change to constant
    // if (questionContext.currentQuestionId === 11) {
    //   navigate('/result');
    // }
  };

  return (
    <>
      {/* {JSON.stringify(currentQuestion)} */}
      {
        questionContext.questions
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
