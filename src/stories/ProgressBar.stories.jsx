import React from 'react';

import { ProgressBar } from './ProgressBar';

export default {
  title: 'Progress Bars/Progress Bar',
  component: ProgressBar,
  argTypes: {

  },
};

const Template = (args) => <ProgressBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  value: null
};
