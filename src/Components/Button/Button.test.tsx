import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';  // Import the jest-dom matchers
import Button from './Button';

test('renders Button component', () => {
  render(<Button label="Test Button" />);
  expect(screen.getByText('Test Button')).toBeInTheDocument();
});

test('Button is disabled when disabled prop is true', () => {
  render(<Button label="Test Button" disabled />);
  expect(screen.getByText('Test Button')).toBeDisabled();
});

test('Button background color changes based on prop', () => {
  render(<Button label="Test Button" bgColor="red" />);
  expect(screen.getByText('Test Button')).toHaveStyle('background-color: red');
});
