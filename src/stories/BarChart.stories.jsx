import React from 'react';

import { BarChart } from './BarChart';

export default {
  title: 'Charts/Bar Chart',
  component: BarChart,
  argTypes: {

  },
};

const Template = (args) => <BarChart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Bar Chart';
