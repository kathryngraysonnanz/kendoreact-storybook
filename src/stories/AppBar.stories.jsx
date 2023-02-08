import React from 'react';

import { AppBar } from './AppBar';

export default {
  title: 'Layout/AppBar',
  component: AppBar,
  argTypes: {

  },
};

const Template = (args) => <AppBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'App Bar';
