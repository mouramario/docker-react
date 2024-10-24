import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Mario', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mario/i);
  expect(linkElement).toBeInTheDocument();
});

test('Mario', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mario/i);
  expect(linkElement).toBeInTheDocument();
});
