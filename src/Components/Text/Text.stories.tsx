import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Text from './Text';
import { TextProps } from './Text.types';
export default {
 title: 'Components/Text',
 component: Text,
 argTypes: {
   content: { control: 'text' },
   size: { control: 'radio', options: ['small', 'medium', 'large'] },
   bold: { control: 'boolean' },
   visible: { control: 'boolean' },
   disabled: { control: 'boolean' },
   color: { control: 'color' },
   bgColor: { control: 'color' },
 },
} as Meta;
const Template: Story<TextProps> = (args) => <Text {...args} />;
export const Primary = Template.bind({});
Primary.args = {
 content: 'Sample text content',
 size: 'medium',
 bold: false,
 visible: true,
 disabled: false,
 color: 'black',
 bgColor: 'transparent',
};
export const Disabled = Template.bind({});
Disabled.args = {
 content: 'Sample text content',
 size: 'medium',
 bold: false,
 visible: true,
 disabled: true,
 color: 'grey',
 bgColor: 'lightgrey',
};