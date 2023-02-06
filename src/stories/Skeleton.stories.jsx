import React from 'react';

import { Skeleton } from './Skeleton';

export default {
  title: 'Indicators/Skeleton',
  component: Skeleton,
  argTypes: {
  },
};

const Template = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Skeleton';
