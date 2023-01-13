import React from 'react';

import { DonutChart } from './DonutChart';

export default {
  title: 'Charts/DonutChart',
  component: DonutChart,
  argTypes: {

  },
};

const Template = (args) => <DonutChart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Donut Chart';
