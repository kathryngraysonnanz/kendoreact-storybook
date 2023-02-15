import React from 'react';

import { TreeList } from './TreeList';

export default {
  title: 'TreeList/TreeList',
  component: TreeList,
  argTypes: {

  },
};

const Template = (args) => <TreeList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'TreeList';
