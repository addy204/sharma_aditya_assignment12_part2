import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label.withConfig({
  shouldForwardProp: (prop) => !['bgColor', 'disabled'].includes(prop),
})<LabelProps>`
  font-size: ${({ size }) => (size === 'large' ? '18px' : '14px')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  background-color: ${({ disabled, bgColor }) => 
    disabled ? (bgColor || 'lightgrey') : (bgColor || 'transparent')};
`;

const Label: React.FC<LabelProps> = ({ text, size, bold, visible = true, disabled = false, bgColor }) => {
  if (!visible) return null;

  return (
    <StyledLabel size={size} bold={bold} disabled={disabled} bgColor={bgColor}>
      {text}
    </StyledLabel>
  );
};

export default Label;
