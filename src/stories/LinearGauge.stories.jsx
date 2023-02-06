import React from 'react';

import { LinearGauge } from './LinearGauge';

export default {
  title: 'Gauges/LinearGauge',
  component: LinearGauge,
  argTypes: {

  },
};

const Template = (args) => <LinearGauge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Horizontal = Template.bind({});
Horizontal.args = {
  vertical: false
};
