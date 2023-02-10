import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const textElement = screen.getByText(/Quote Generator/i);
  expect(textElement).toBeInTheDocument();
});

test('renders New Quote Button', () => {
  render(<App />);
  const getNewQuote = jest.fn();
  const quoteButton = screen.getByRole('button');
  expect(quoteButton).toBeInTheDocument();
  expect(quoteButton).toHaveTextContent(/New Quote/i);
});
