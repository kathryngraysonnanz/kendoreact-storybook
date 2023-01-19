import React from 'react';

import { RangeBar } from './RangeBar';

export default {
  title: 'Charts/Range Bar Chart',
  component: RangeBar,
  argTypes: {

  },
};

const Template = (args) => <RangeBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Range Bar Chart';
