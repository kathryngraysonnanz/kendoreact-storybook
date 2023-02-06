import React from 'react';

import { RadialGauge } from './RadialGauge';

export default {
  title: 'Gauges/RadialGauge',
  component: RadialGauge,
  argTypes: {

  },
};

const Template = (args) => <RadialGauge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Radial Gauge';
