import React from 'react';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import QuestionProvider from './store/providers/QuestionProvider';
import TriviaLayout from './layouts/TriviaLayout';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundary from './components/ErrorBoundary';
import HomePage from './pages/Home';
import QuestionPage from './pages/Question';
import ResultPage from './pages/Result';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <QuestionProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate replace to="/question" />} />
            <Route path="question" element={<TriviaLayout />}>
              <Route index element={<HomePage />} />
              <Route path=":questionId" element={<QuestionPage />} />
            </Route>
            <Route path="result" element={<TriviaLayout />}>
              <Route index element={<ResultPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QuestionProvider>
    </ErrorBoundary>
  );
}

export default App;
