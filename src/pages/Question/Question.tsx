/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import QuestionCard from '../../components/Question/QuestionCard';

import QuestionContext from '../../store/contexts/QuestionContext';

const Question = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { questionId } = useParams<string>();
  const trivia = useContext(QuestionContext);
  const navigate = useNavigate();

  // if (trivia.loading) return <h1 className="text-9xl">Loading</h1>;

  const handleNextQuestion = (choice: boolean) => {
    console.log(choice, 'choice');
    // if (!trivia.setCurrentQuestionId) return;
    // const newCurrentId = trivia?.currentQuestionId + 1;
    // trivia.setCurrentQuestionId(newCurrentId);
    trivia.getCurrentQuestion();
    if (trivia.currentQuestion) {
      trivia.scoreQuestion(choice, trivia.currentQuestion);
    }
    navigate(`/question/${trivia.currentQuestionId}`);
    // change to constant
    if (trivia.currentQuestionId === 11) {
      navigate('/result');
    }
  };

  return (
    <>
      {/* {JSON.stringify(currentQuestion)} */}
      {/* {
        trivia.questions
        && (
          <>
            <QuestionCard
              question={trivia.currentQuestion}
              handleNextQuestion={handleNextQuestion}
            />
          </>
        )
      } */}
    </>
  );
};

export default Question;
