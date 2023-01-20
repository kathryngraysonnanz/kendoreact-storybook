import React from 'react';

import { Typography } from './Typography';

export default {
  title: 'Common Utilities/Typography',
  component: Typography,
  argTypes: {

  },
};

const Template = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Typography';
