import React from 'react';

import { CircularGauge } from './CircularGauge';

export default {
  title: 'Gauges/CircularGauge',
  component: CircularGauge,
  argTypes: {

  },
};

const Template = (args) => <CircularGauge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Circular Gauge';
