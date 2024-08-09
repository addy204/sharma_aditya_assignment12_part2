import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders Dropdown component', () => {
  render(<Dropdown options={['Option 1', 'Option 2', 'Option 3']} onChange={() => {}} />);
  expect(screen.getByText('Option 1')).toBeInTheDocument();
  expect(screen.getByText('Option 2')).toBeInTheDocument();
  expect(screen.getByText('Option 3')).toBeInTheDocument();
});

test('Dropdown is disabled when disabled prop is true', () => {
  render(<Dropdown options={['Option 1']} onChange={() => {}} disabled />);
  expect(screen.getByRole('combobox')).toBeDisabled();
});

test('Dropdown background color changes based on bgColor prop', () => {
  render(<Dropdown options={['Option 1']} onChange={() => {}} bgColor="lightblue" />);
  expect(screen.getByRole('combobox')).toHaveStyle('background-color: lightblue');
});
