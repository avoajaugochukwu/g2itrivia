import React, { useContext, useEffect, useState } from 'react';
import { IQuestionContext, IResult } from '../../interfaces/IQuestion';
import QuestionContext from '../../store/contexts/QuestionContext';

import ResultItem from './ResultItem';

const Result = () => {
  const questionContext = useContext(QuestionContext) as IQuestionContext;
  const [score, setScore] = useState<number>(0);
  const [results, setResults] = useState<IResult[]>([]);

  useEffect(() => {
    const { result } = questionContext;
    setResults(result);

    const count = result.reduce((accumulator, obj) => {
      if (obj.isCorrect === true) {
        return accumulator + 1;
      }

      return accumulator;
    }, 0);

    setScore(count);
  }, []);

  return (
    <div>
      <div className="cardWrapper">
        <div className="card bg-card card-height w-full md:w-3/12 mx-auto flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
          <div>
            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-question-fill" viewBox="0 0 16 16">
                <path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z" />
              </svg>
            </span>
          </div>

          <p className="flex text-gray-500 yellow-color">
            {score}
            {' '}
            / 10
          </p>

          {
            results
            && (
              results.map((result) => (
                <ResultItem key={result.question} result={result} />
              ))
            )
          }

          <button type="submit" className="py-10 flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-200 transform hover:underline hover:text-blue-600">
            <span className="mx-1">Next</span>
            <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
