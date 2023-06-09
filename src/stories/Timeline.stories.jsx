import React from 'react';

import { Timeline } from './Timeline';

export default {
  title: 'Layout/Timeline',
  component: Timeline,
  argTypes: {

  },
};

const Template = (args) => <Timeline {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  alterMode: true,
  collapsibleEvents: true
};
Primary.storyName = 'Timeline';