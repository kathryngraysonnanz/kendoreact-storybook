import React from 'react';

import { PieChart } from './PieChart';

export default {
  title: 'Charts/Pie Chart',
  component: PieChart,
  argTypes: {

  },
};

const Template = (args) => <PieChart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Pie Chart';
