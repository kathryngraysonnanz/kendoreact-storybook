import React from 'react';

import { ColorGradient } from './ColorGradient';

export default {
  title: 'Inputs/Color Gradient',
  component: ColorGradient,
  argTypes: {

  },
};

const Template = (args) => <ColorGradient {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const BackgroundColorComparison = Template.bind({});
BackgroundColorComparison.args = {
  backgroundColor: '#5f3c97'
};

export const WithAlphaValue = Template.bind({});
WithAlphaValue.args = {
  opacity: 0.5
};
