import React from 'react';

import { TabStrip } from './TabStrip';

export default {
  title: 'Layout/Tab Strip',
  component: TabStrip,
  argTypes: {

  },
};

const Template = (args) => <TabStrip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Scrollable = Template.bind({});
Scrollable.args = {
  scrollable: 'true',
  style: {width: '300px'}
};
