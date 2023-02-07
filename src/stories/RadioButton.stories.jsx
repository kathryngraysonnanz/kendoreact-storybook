import React from 'react';

import { RadioButton } from './RadioButton';

export default {
  title: 'Inputs/Radio Button',
  component: RadioButton,
  argTypes: {

  },
};

const Template = (args) => <RadioButton {...args} />;

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
