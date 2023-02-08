import React from 'react';

import { Drawer } from './Drawer';

export default {
  title: 'Layout/Drawer',
  component: Drawer,
  argTypes: {

  },
};

const Template = (args) => <Drawer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';
