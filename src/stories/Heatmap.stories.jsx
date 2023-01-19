import React from 'react';

import { Heatmap } from './Heatmap';

export default {
  title: 'Charts/Heatmap',
  component: Heatmap,
  argTypes: {

  },
};

const Template = (args) => <Heatmap {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Heatmap';
