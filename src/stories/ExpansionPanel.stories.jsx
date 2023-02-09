import React from 'react';

import { ExpansionPanel } from './ExpansionPanel';

export default {
  title: 'Layout/ExpansionPanel',
  component: ExpansionPanel,
  argTypes: {

  },
};

const Template = (args) => <ExpansionPanel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
