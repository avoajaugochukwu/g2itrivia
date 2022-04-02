import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuestionPage from './pages/Question.page';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<QuestionPage />} />
          <Route path=":number" element={<QuestionPage />} />
        </Route>
        {/* <Route path="layout" element={<LayoutComponent />}>
          <Route index element={<AboutPage />} />
          <Route path=":number" element={<AboutPage />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
