import React from 'react';

import { Splitter } from './Splitter';

export default {
  title: 'Layout/Splitter',
  component: Splitter,
  argTypes: {

  },
};

const Template = (args) => <Splitter {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Horizontal';

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'vertical'
};
