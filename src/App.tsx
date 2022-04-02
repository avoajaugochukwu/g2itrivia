import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TriviaLayout from './layouts/TriviaLayout';
import HomePage from './pages/Home';
import QuestionPage from './pages/Question';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TriviaLayout />}>
          <Route index element={<HomePage />} />
          <Route path="question" element={<QuestionPage />} />
          <Route path=":number" element={<QuestionPage />} />
        </Route>
        {/* <Route path="layout" element={<TriviaLayout />}>
          <Route index element={<QuestionPage />} />
          <Route path=":number" element={<QuestionPage />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
