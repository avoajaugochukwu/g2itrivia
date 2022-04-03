import React from 'react';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import TriviaLayout from './layouts/TriviaLayout';
import QuestionProvider from './store/providers/QuestionProvider';

import HomePage from './pages/Home';
import QuestionPage from './pages/Question';
import ResultPage from './pages/Result';
import './App.css';
// import { Redirect } from 'react-router-dom';

function App() {
  return (
    <QuestionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/question" />} />
          {/* <Route path="/" element={<TriviaLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/" element={<Navigate replace to="/question" />} />
          </Route> */}
          <Route path="question" element={<TriviaLayout />}>
            <Route index element={<HomePage />} />
            <Route path=":questionId" element={<QuestionPage />} />
          </Route>
          <Route path="result" element={<ResultPage />} />
          {/* <Route path="layout" element={<TriviaLayout />}>
          <Route index element={<QuestionPage />} />
          <Route path=":number" element={<QuestionPage />} />
        </Route> */}
        </Routes>
      </BrowserRouter>
    </QuestionProvider>
  );
}

export default App;
