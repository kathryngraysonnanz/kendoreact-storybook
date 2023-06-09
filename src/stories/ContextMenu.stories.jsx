import React from 'react';

import { ContextMenu } from './ContextMenu';

export default {
  title: 'Layout/Context Menu',
  component: ContextMenu,
  argTypes: {

  },
};

const Template = (args) => <ContextMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Context Menu';