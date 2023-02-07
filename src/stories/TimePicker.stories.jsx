import React from 'react';

import { TimePicker } from './TimePicker';

export default {
  title: 'Date Inputs/Time Picker',
  component: TimePicker,
  argTypes: {

  },
};

const Template = (args) => <TimePicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};


export const TextHints = Template.bind({});
TextHints.args = {
  value: null,
  placeholder: "Enter your time of birth"
};

export const FloatingLabel = Template.bind({});
FloatingLabel.args = {
  label: "Your time of birth",
  placeholder: ""
};
