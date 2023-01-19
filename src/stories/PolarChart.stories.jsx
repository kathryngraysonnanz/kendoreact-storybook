import React from 'react';

import { PolarChart } from './PolarChart';

export default {
  title: 'Charts/PolarChart',
  component: PolarChart,
  argTypes: {

  },
};

const Template = (args) => <PolarChart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Polar Chart';
