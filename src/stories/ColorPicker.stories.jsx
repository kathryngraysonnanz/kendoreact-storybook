import React from 'react';

import { ColorPicker } from './ColorPicker';

export default {
  title: 'Inputs/ColorPicker',
  component: ColorPicker,
  argTypes: {

  },
};

const Template = (args) => <ColorPicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  view: 'palette'
};
Primary.storyName = 'Palette';

export const Gradient = Template.bind({});
Gradient.args = {
  view: 'gradient'
};

export const Combo = Template.bind({});
Combo.args = {
  view: 'combo'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
