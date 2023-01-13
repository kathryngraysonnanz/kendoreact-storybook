import React from 'react';

import { Toolbar } from './Toolbar';

export default {
  title: 'Buttons/Toolbar',
  component: Toolbar,
  argTypes: {

  },
};

const Template = (args) => <Toolbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Toolbar';
