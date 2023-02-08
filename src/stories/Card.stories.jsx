import React from 'react';

import { Card } from './Card';

export default {
  title: 'Layout/Card',
  component: Card,
  argTypes: {

  },
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';
