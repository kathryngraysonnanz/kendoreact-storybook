import React from 'react';

import { TreeView } from './TreeView';

export default {
  title: 'TreeView/TreeView',
  component: TreeView,
  argTypes: {

  },
};

const Template = (args) => <TreeView {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const WithCheckboxes = Template.bind({});
WithCheckboxes.args = {
  checkboxes: true
};

export const WithExpandIcons = Template.bind({});
WithExpandIcons.args = {
  expandIcons: true
};
