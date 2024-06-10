import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';
const StyledText = styled.p<TextProps>`
 font-size: ${({ size }) => (size === 'large' ? '18px' : size === 'medium' ? '16px' : '14px')};
 font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
 display: ${({ visible }) => (visible ? 'block' : 'none')};
 background-color: ${({ disabled, bgColor }) => (disabled ? (bgColor || 'lightgrey') : 'transparent')};
 color: ${({ disabled, color }) => (disabled ? 'grey' : color || 'black')};
 @media (max-width: 768px) {
   font-size: ${({ size }) => (size === 'large' ? '16px' : size === 'medium' ? '14px' : '12px')};
 }
`;
const Text: React.FC<TextProps> = ({ content, size, bold, visible = true, disabled = false, color, bgColor }) => {
 return <StyledText size={size} bold={bold} visible={visible} disabled={disabled} color={color} bgColor={bgColor}>{content}</StyledText>;
};
export default Text;