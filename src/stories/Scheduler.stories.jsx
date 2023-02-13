import React from 'react';

import { Scheduler } from './Scheduler';

export default {
  title: 'Scheduler/Scheduler',
  component: Scheduler,
  argTypes: {

  },
};

const Template = (args) => <Scheduler {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Scheduler';
