import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes } from 'react-router-dom';
import Home from '../pages/Home';

test('renders Welcome To The Trivia Challenge!', () => {
  render(
    <BrowserRouter>
      <Home />
      <Routes />
    </BrowserRouter>,
  );
  const linkElement = screen.getByText(/Welcome To The Trivia Challenge!/i);
  expect(linkElement).toBeInTheDocument();
});
