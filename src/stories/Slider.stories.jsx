import React from 'react';

import { Slider } from './Slider';

export default {
  title: 'Inputs/Slider',
  component: Slider,
  argTypes: {

  },
};

const Template = (args) => <Slider {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const WithButtons = Template.bind({});
WithButtons.args = {
  buttons: true,
  step: 1
};

export const PredefinedSteps = Template.bind({});
PredefinedSteps.args = {
  buttons: true,
  step: 10
};

export const Vertical = Template.bind({});
Vertical.args = {
  vertical: true
};
