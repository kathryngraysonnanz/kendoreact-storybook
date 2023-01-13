import React from 'react';

import { FunnelChart } from './FunnelChart';

export default {
  title: 'Charts/FunnelChart',
  component: FunnelChart,
  argTypes: {

  },
};

const Template = (args) => <FunnelChart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Funnel Chart';
