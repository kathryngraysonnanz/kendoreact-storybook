import React from 'react';

import { Menu } from './Menu';

export default {
  title: 'Layout/Menu',
  component: Menu,
  argTypes: {

  },
};

const Template = (args) => <Menu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Vertical = Template.bind({});
Vertical.args = {
  vertical: true,
  style: {width: '80px'}
};

export const HoverDelay = Template.bind({});
HoverDelay.args = {
  hoverOpenDelay: 300,
  hoverCloseDelay: 400
};
