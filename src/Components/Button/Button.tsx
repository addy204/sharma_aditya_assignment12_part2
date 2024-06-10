import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';
const StyledButton = styled.button<ButtonProps>`
 background-color: ${({ bgColor }) => bgColor || 'blue'};
 color: white;
 padding: 10px 20px;
 border: none;
 border-radius: 4px;
 cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
 display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
 opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
 @media (max-width: 768px) {
   padding: 8px 16px;
   font-size: 14px;
 }
`;
const Button: React.FC<ButtonProps> = ({ label, disabled = false, bgColor, visible = true }) => {
 return <StyledButton disabled={disabled} bgColor={bgColor} visible={visible}>{label}</StyledButton>;
};
export default Button;