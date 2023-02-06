import React from 'react';

import { ArcGauge } from './ArcGauge';

export default {
  title: 'Gauges/ArcGauge',
  component: ArcGauge,
  argTypes: {

  },
};

const Template = (args) => <ArcGauge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Arc Gauge';
