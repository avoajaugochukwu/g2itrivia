import React from 'react';
import { Outlet } from 'react-router-dom';

const TriviaLayout = () => (
  <div className="bg-trivia">
    <Outlet />
  </div>
);

export default TriviaLayout;
