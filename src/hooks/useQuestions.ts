import { useState } from 'react';
import { getQuestionSessionURL } from '../utils/helper.functions';
import { IQuestionContext } from '../interfaces/IQuestion';
import { TRIVIA_BASE_URL } from '../utils/contants';

const useQuestions = (): [Partial<IQuestionContext>, () => void] => {
  const questionURL = getQuestionSessionURL({
    amount: 10,
    difficulty: 'hard',
    type: 'boolean',
  });

  const URL = TRIVIA_BASE_URL + questionURL;

  const fetchInitialState = {
    questions: [],
    loading: false,
    error: null,
  };

  const [result, setResult] = useState<Partial<IQuestionContext>>(fetchInitialState);

  // I was supposed to use axios but it kept adding a slash before the URL body
  const fetchQuestions = () => {
    setResult((prevState) => ({ ...prevState, loading: true }));

    function wait(delay: number): Promise<Response> {
      return new Promise((resolve) => setTimeout(resolve, delay));
    }

    const fetchRetry = (
      url: string,
      delay: number,
      tries: number,
    ): Promise<void | Response> => {
      function onError(err: string): Promise<void | Response> {
        const triesLeft: number = tries - 1;
        if (!triesLeft) {
          setResult((prevState) => ({
            ...prevState,
            error: `Can not load questions: ${err}`,
            loading: false,
          }));
        }
        return wait(delay).then(() => fetchRetry(url, delay, triesLeft));
      }

      return fetch(url)
        .then((res) => res.json())
        .then((data) => setResult((prevState) => ({
          ...prevState,
          loading: false,
          questions: data.results,
        })))
        .catch(onError);
    };

    fetchRetry(URL, 1000, 10);
  };

  return [result, fetchQuestions];
};

export default useQuestions;

// I noticed that the endpoint was failing, even after testing it on POSTMAN
// Even the domain fails sometimes
// I made a quick dirty fix to perform retries when it fails, so that the app will
// WOrk in production
// In an ideal situation, I would have informed the backend developer
// or the devops team responsible for
// Managing the app so that they can fix the issue.
