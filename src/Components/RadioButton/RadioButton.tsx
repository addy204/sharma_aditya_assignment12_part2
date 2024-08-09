import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 0 10px;
`;

const StyledRadioButton = styled.input.attrs({ type: 'radio' }).withConfig({
  shouldForwardProp: (prop) => !['bgColor'].includes(prop),
})<RadioButtonProps>`
  appearance: none;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${({ disabled, bgColor }) => (disabled ? 'grey' : bgColor || 'blue')};
  background-color: ${({ disabled, bgColor }) => (disabled ? bgColor || 'lightgrey' : 'transparent')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:checked {
    background-color: ${({ disabled, bgColor }) => (disabled ? 'grey' : bgColor || 'blue')};
  }

  &:after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 4px;
    background: ${({ disabled }) => (disabled ? 'darkgrey' : 'white')};
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({ name, options, onChange, visible = true, disabled = false, ...props }) => {
  if (!visible) return null;
  return (
    <div>
      {options.map((option) => (
        <StyledLabel key={option}>
          <StyledRadioButton name={name} value={option} onChange={() => onChange(option)} disabled={disabled} {...props} />
          {option}
        </StyledLabel>
      ))}
    </div>
  );
};

export default RadioButton;
