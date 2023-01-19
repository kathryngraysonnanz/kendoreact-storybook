import React from 'react';

import { WaterfallChart } from './WaterfallChart';

export default {
  title: 'Charts/Waterfall Chart',
  component: WaterfallChart,
  argTypes: {

  },
};

const Template = (args) => <WaterfallChart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Waterfall Chart';
