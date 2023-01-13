import React from 'react';

import { AreaChart } from './AreaChart';

export default {
  title: 'Charts/AreaChart',
  component: AreaChart,
  argTypes: {

  },
};

const Template = (args) => <AreaChart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Area Chart';
