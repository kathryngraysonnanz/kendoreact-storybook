import React from 'react';

import { FloatingActionButton } from './FloatingActionButton';

export default {
  title: 'Buttons/FloatingActionButton',
  component: FloatingActionButton,
  argTypes: {

  },
};

const Template = (args) => <FloatingActionButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "FloatingActionButton"
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "FloatingActionButton",
  disabled: true,
};

export const Icon = Template.bind({});
Icon.args = {
  icon: 'check',
};
