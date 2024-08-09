// src/Components/RadioButton/RadioButton.test.tsx
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';

test('renders RadioButton component', () => {
  render(<RadioButton name="testGroup" options={['Option 1', 'Option 2']} onChange={() => {}} />);
  expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
  expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
});

test('RadioButton changes selection when clicked', () => {
  const handleChange = jest.fn();
  render(<RadioButton name="testGroup" options={['Option 1', 'Option 2']} onChange={handleChange} />);
  
  fireEvent.click(screen.getByLabelText('Option 2'));
  expect(handleChange).toHaveBeenCalledWith('Option 2');
});

test('RadioButton is disabled when disabled prop is true', () => {
  render(<RadioButton name="testGroup" options={['Option 1']} onChange={() => {}} disabled />);
  expect(screen.getByLabelText('Option 1')).toBeDisabled();
});

test('RadioButton background color changes based on bgColor prop', () => {
  render(<RadioButton name="testGroup" options={['Option 1']} onChange={() => {}} bgColor="red" />);
  expect(screen.getByLabelText('Option 1')).toHaveStyle('border-color: red');
});
