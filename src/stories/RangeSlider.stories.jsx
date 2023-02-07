import React from 'react';

import { RangeSlider } from './RangeSlider';

export default {
  title: 'Inputs/RangeSlider',
  component: RangeSlider,
  argTypes: {

  },
};

const Template = (args) => <RangeSlider {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const Vertical = Template.bind({});
Vertical.args = {
  vertical: true
};
