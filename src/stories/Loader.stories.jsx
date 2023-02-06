import React from 'react';

import { Loader } from './Loader';

export default {
  title: 'Indicators/Loader',
  component: Loader,
  argTypes: {

  },
};

const Template = (args) => <Loader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'pulsing'
};
Primary.storyName = 'Pulsing';

export const InfiniteSpinner = Template.bind({});
InfiniteSpinner.args = {
  type: 'infinite-spinner'
};

export const ConvergingSpinner = Template.bind({});
ConvergingSpinner.args = {
  type: 'converging-spinner'
};
