import React from 'react';

import { Stepper } from './Stepper';

export default {
  title: 'Layout/Stepper',
  component: Stepper,
  argTypes: {

  },
};

const Template = (args) => <Stepper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Stepper';
