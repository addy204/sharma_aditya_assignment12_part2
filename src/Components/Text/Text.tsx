import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p.withConfig({
  shouldForwardProp: (prop) =>
    !['size', 'bold', 'disabled', 'bgColor', 'color'].includes(prop),
})<TextProps>`
  font-size: ${({ size }) => (size === 'large' ? '18px' : size === 'medium' ? '16px' : '14px')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  background-color: ${({ disabled, bgColor }) => (disabled ? (bgColor || 'lightgrey') : bgColor || 'transparent')};
  color: ${({ disabled, color }) => (disabled ? 'grey' : color || 'black')};
  @media (max-width: 768px) {
    font-size: ${({ size }) => (size === 'large' ? '16px' : size === 'medium' ? '14px' : '12px')};
  }
`;

const Text: React.FC<TextProps> = ({ content, size, bold, visible = true, disabled = false, color, bgColor }) => {
  if (!visible) return null;

  return (
    <StyledText
      size={size}
      bold={bold}
      disabled={disabled}
      color={color}
      bgColor={bgColor}
    >
      {content}
    </StyledText>
  );
};

export default Text;
