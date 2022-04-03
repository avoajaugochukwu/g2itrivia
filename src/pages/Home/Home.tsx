import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="cardWrapper">
    <div className="card bg-card card-height w-full md:w-3/12 mx-auto flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
      <div>
        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </span>
      </div>

      <h1 className="blue-color py-10 text-3xl font-semibold text-gray-700 capitalize">
        Welcome to the Trivia Challenge!
      </h1>

      <p className="text-gray-500 py-10 green-color">
        You will be presented with 10 True or False questions.
      </p>

      <p className="text-gray-500 py-10 yellow-color">
        Can you score 100%?
      </p>

      <Link to="/question/1" className="py-10 flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-200 transform hover:underline hover:text-blue-600">
        <span className="mx-1">BEGIN</span>
        <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      </Link>
    </div>
  </div>
);

export default Home;
