import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useQuestions from '../../hooks/useQuestions';

const Question = () => {
  const { number } = useParams();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ data, loading, error }, fetchQuestions] = useQuestions();
  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div>
      Question.page
      {' '}
      {JSON.stringify(number)}
    </div>
  );
};

export default Question;
