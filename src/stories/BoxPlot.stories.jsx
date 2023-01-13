import React from 'react';

import { BoxPlot } from './BoxPlot';

export default {
  title: 'Charts/BoxPlot',
  component: BoxPlot,
  argTypes: {

  },
};

const Template = (args) => <BoxPlot {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Box Plot';
