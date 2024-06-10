import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';
const StyledLabel = styled.label<LabelProps>`
 font-size: ${({ size }) => (size === 'large' ? '18px' : '14px')};
 font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
 display: ${({ visible }) => (visible ? 'inline' : 'none')};
 background-color: ${({ disabled, bgColor }) => (disabled ? (bgColor || 'lightgrey') : 'transparent')};
`;
const Label: React.FC<LabelProps> = ({ text, size, bold, visible = true, disabled = false, bgColor }) => {
 return <StyledLabel size={size} bold={bold} visible={visible} disabled={disabled} bgColor={bgColor}>{text}</StyledLabel>;
};
export default Label;