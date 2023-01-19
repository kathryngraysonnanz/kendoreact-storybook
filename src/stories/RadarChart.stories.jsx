import React from 'react';

import { RadarChart } from './RadarChart';

export default {
  title: 'Charts/RadarChart',
  component: RadarChart,
  argTypes: {

  },
};

const Template = (args) => <RadarChart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Radar Chart';
