import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';
const StyledSelect = styled.select<DropdownProps>`
 padding: 10px;
 font-size: 16px;
 display: ${({ visible }) => (visible ? 'block' : 'none')};
 background-color: ${({ disabled, bgColor }) => (disabled ? (bgColor || 'lightgrey') : 'white')};
 @media (max-width: 768px) {
   font-size: 14px;
 }
`;
const Dropdown: React.FC<DropdownProps> = ({ options, onChange, visible = true, disabled = false, bgColor }) => {
 return (
<StyledSelect onChange={(e) => onChange(e.target.value)} visible={visible} disabled={disabled} bgColor={bgColor}>
     {options.map((option) => (
<option key={option} value={option}>
         {option}
</option>
     ))}
</StyledSelect>
 );
};
export default Dropdown;