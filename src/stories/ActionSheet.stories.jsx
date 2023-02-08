import React from 'react';

import { ActionSheet } from './ActionSheet';

export default {
  title: 'Layout/ActionSheet',
  component: ActionSheet,
  argTypes: {

  },
};

const Template = (args) => <ActionSheet {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Action Sheet';
