import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

test('renders Text component', () => {
  render(<Text content="Sample text content" />);
  expect(screen.getByText('Sample text content')).toBeInTheDocument();
});

test('Text is hidden when visible prop is false', () => {
  render(<Text content="Sample text content" visible={false} />);
  expect(screen.queryByText('Sample text content')).not.toBeInTheDocument();
});

test('Text background color changes based on bgColor prop', () => {
  render(<Text content="Sample text content" bgColor="yellow" />);
  expect(screen.getByText('Sample text content')).toHaveStyle('background-color: yellow');
});
