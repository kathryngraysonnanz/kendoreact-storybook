import React from 'react';

import { NumericTextBox } from './NumericTextBox';

export default {
  title: 'Inputs/NumericTextBox',
  component: NumericTextBox,
  argTypes: {

  },
};

const Template = (args) => <NumericTextBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  readonly: true
};

export const NoSpinners = Template.bind({});
NoSpinners.args = {
  spinners: false
};

export const PredefinedSteps = Template.bind({});
PredefinedSteps.args = {
  step: 5 
};
