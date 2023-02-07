import React from 'react';

import { SplitButton } from './SplitButton';

export default {
  title: 'Buttons/Split Button',
  component: SplitButton,
  argTypes: {

  },
};

const Template = (args) => <SplitButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "SplitButton"
};

export const Disabled = Template.bind({});
Disabled.args = {
   text: "SplitButton",
  disabled: true,
};

export const Icon = Template.bind({});
Icon.args = {
  icon: 'save',
};
