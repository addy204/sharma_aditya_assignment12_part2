import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<Omit<DropdownProps, 'visible'>>`
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
    <StyledSelect
      onChange={(e) => onChange(e.target.value)}
      style={{ display: visible ? 'block' : 'none', backgroundColor: bgColor }}
      disabled={disabled}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
