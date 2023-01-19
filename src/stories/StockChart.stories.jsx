import React from 'react';

import { StockChart } from './StockChart';

export default {
  title: 'Charts/Stock Chart',
  component: StockChart,
  argTypes: {

  },
};

const Template = (args) => <StockChart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Stock Chart';
