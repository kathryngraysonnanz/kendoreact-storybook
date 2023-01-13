import React from 'react';

import { BubbleChart } from './BubbleChart';

export default {
  title: 'Charts/BubbleChart',
  component: BubbleChart,
  argTypes: {

  },
};

const Template = (args) => <BubbleChart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Bubble Chart';
