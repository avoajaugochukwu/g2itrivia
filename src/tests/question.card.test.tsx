import React from 'react';
import { render, screen } from '@testing-library/react';
import QuestionCard from '../components/Question/QuestionCard';

const question = {
  category: 'Science & Nature',
  type: 'boolean',
  difficulty: 'hard',
  question: 'It was once believed that injecting shark cartilage into people would prevent them from contracting cancer.',
  correct_answer: 'True',
  incorrect_answers: [
    'False',
  ],
};

test('renders Welcome To The Trivia Challenge!', () => {
  render(
    <QuestionCard
      questionNumber={1}
      handleNextQuestion={() => {}}
      question={question}
    />,
  );
  const linkElement = screen.getByText(/It was once believed that injecting shark cartilage into people would prevent them from contracting cancer./i);
  expect(linkElement).toBeInTheDocument();
});
