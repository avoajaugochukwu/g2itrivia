import React from 'react';
import { Outlet } from 'react-router-dom';

const TriviaLayout = () => (
  <div className="bg-trivia">
    {/* style={{ backgroundColor: '#142850' }} */}
    <Outlet />
  </div>
);

export default TriviaLayout;
