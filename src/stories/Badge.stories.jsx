import React from 'react';

import { Badge } from './Badge';

export default {
  title: 'Indicators/Badge',
  component: Badge,
  argTypes: {

  },
};

const Template = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Badge';
