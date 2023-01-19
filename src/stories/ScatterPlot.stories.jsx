import React from 'react';

import { ScatterPlot } from './ScatterPlot';

export default {
  title: 'Charts/Scatter Plot',
  component: ScatterPlot,
  argTypes: {

  },
};

const Template = (args) => <ScatterPlot {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Scatter Plot';
