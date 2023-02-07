import React from 'react';

import { Checkbox } from './Checkbox';

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  argTypes: {

  },
};

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Yes, I'd like to subscribe"
};
