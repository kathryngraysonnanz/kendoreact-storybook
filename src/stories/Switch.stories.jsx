import React from 'react';

import { Switch } from './Switch';

export default {
  title: 'Inputs/Switch',
  component: Switch,
  argTypes: {

  },
};

const Template = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const WithLabels = Template.bind({});
WithLabels.args = {
  onLabel: "I",
  offLabel: "O"
};
