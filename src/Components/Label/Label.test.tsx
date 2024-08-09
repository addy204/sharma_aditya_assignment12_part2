import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

test('renders Label component', () => {
  render(<Label text="Label Text" />);
  expect(screen.getByText('Label Text')).toBeInTheDocument();
});

test('Label is hidden when visible prop is false', () => {
  render(<Label text="Label Text" visible={false} />);
  expect(screen.queryByText('Label Text')).not.toBeInTheDocument();
});

test('Label background color changes based on bgColor prop', () => {
  render(<Label text="Label Text" bgColor="yellow" />);
  expect(screen.getByText('Label Text')).toHaveStyle('background-color: yellow');
});
