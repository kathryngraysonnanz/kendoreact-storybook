import React from 'react';

import { BottomNavigation } from './BottomNavigation';

export default {
  title: 'Layout/Bottom Navigation',
  component: BottomNavigation,
  argTypes: {

  },
};

const Template = (args) => <BottomNavigation {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const HorizontalFlow = Template.bind({});
HorizontalFlow.args = {
  itemFlow: 'horizontal'
};
