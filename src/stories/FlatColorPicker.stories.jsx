import React from 'react';

import { FlatColorPicker } from './FlatColorPicker';

export default {
  title: 'Inputs/Flat Color Picker',
  component: FlatColorPicker,
  argTypes: {

  },
};

const Template = (args) => <FlatColorPicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  view: 'palette'
};
Primary.storyName = 'Palette';

export const Gradient = Template.bind({});
Gradient.args = {

};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
