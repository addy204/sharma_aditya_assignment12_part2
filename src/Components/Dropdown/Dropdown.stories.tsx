import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Dropdown from './Dropdown';
import { DropdownProps } from './Dropdown.types';
export default {
 title: 'Components/Dropdown',
 component: Dropdown,
 argTypes: {
   options: { control: 'array' },
   visible: { control: 'boolean' },
   disabled: { control: 'boolean' },
   bgColor: { control: 'color' },
 },
} as Meta;
const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;
export const Primary = Template.bind({});
Primary.args = {
 options: ['Option 1', 'Option 2', 'Option 3'],
 visible: true,
 disabled: false,
 bgColor: 'white',
};
export const Disabled = Template.bind({});
Disabled.args = {
 options: ['Option 1', 'Option 2', 'Option 3'],
 visible: true,
 disabled: true,
 bgColor: 'lightgrey',
};