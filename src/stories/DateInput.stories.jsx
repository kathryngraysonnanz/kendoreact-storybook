import React from 'react';

import { DateInput } from './DateInput';

export default {
  title: 'Date Inputs/DateInput',
  component: DateInput,
  argTypes: {

  },
};

const Template = (args) => <DateInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const SpinButtons = Template.bind({});
SpinButtons.args = {
  spinners: true
};

export const TextHints = Template.bind({});
TextHints.args = {
  value: null,
  placeholder: "Enter your birthday"
};

export const FloatingLabel = Template.bind({});
FloatingLabel.args = {
  label: "Your birthday",
  placeholder: ""
};
