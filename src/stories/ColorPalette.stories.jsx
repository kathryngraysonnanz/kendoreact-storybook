import React from 'react';

import { ColorPalette } from './ColorPalette';

export default {
  title: 'Inputs/ColorPalette',
  component: ColorPalette,
  argTypes: {

  },
};

const Template = (args) => <ColorPalette {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
