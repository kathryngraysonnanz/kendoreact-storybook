import React from 'react';

import { DropDownButton } from './DropDownButton';

export default {
  title: 'Buttons/DropDownButton',
  component: DropDownButton,
  argTypes: {

  },
};

const Template = (args) => <DropDownButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Icon = Template.bind({});
Icon.args = {
  icon: 'check',
};
