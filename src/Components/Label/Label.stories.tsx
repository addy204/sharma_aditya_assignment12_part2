import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Label from './Label';
import { LabelProps } from './Label.types';
export default {
 title: 'Components/Label',
 component: Label,
 argTypes: {
   text: { control: 'text' },
   size: { control: 'radio', options: ['small', 'large'] },
   bold: { control: 'boolean' },
   visible: { control: 'boolean' },
   disabled: { control: 'boolean' },
   bgColor: { control: 'color' },
 },
} as Meta;
const Template: Story<LabelProps> = (args) => <Label {...args} />;
export const Primary = Template.bind({});
Primary.args = {
 text: 'Label Text',
 size: 'large',
 bold: true,
 visible: true,
 disabled: false,
 bgColor: 'transparent',
};
export const Disabled = Template.bind({});
Disabled.args = {
 text: 'Label Text',
 size: 'large',
 bold: true,
 visible: true,
 disabled: true,
 bgColor: 'lightgrey',
};