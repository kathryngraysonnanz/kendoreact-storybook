import React from 'react';

import { LineChart } from './LineChart';

export default {
  title: 'Charts/Line Chart',
  component: LineChart,
  argTypes: {

  },
};

const Template = (args) => <LineChart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Line Chart';
