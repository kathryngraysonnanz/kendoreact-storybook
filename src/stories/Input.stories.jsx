import React from 'react';

import { Input } from './Input';

export default {
  title: 'Inputs/Input',
  component: Input,
  argTypes: {

  },
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
