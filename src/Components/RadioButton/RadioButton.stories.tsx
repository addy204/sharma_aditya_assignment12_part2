import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';
export default {
 title: 'Components/RadioButton',
 component: RadioButton,
 argTypes: {
   options: { control: 'array' },
   name: { control: 'text' },
   visible: { control: 'boolean' },
   disabled: { control: 'boolean' },
   bgColor: { control: 'color' },
 },
} as Meta;
const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;
export const Primary = Template.bind({});
Primary.args = {
 name: 'radioGroup',
 options: ['Option 1', 'Option 2', 'Option 3'],
 visible: true,
 disabled: false,
 bgColor: 'blue',
};
export const Disabled = Template.bind({});
Disabled.args = {
 name: 'radioGroup',
 options: ['Option 1', 'Option 2', 'Option 3'],
 visible: true,
 disabled: true,
 bgColor: 'lightgrey',
};