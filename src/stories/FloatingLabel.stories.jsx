import React from 'react';

import { FloatingLabel } from './FloatingLabel';

export default {
  title: 'Labels/FloatingLabel',
  component: FloatingLabel,
  argTypes: {

  },
};

const Template = (args) => <FloatingLabel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Floating Label';
