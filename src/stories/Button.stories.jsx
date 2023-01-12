import React from 'react';

import { Button } from './Button';

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {

  },
};

const Template = (args) => <Button {...args} />;

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

export const Togglable = Template.bind({});
Togglable.args = {
  togglable: true,
};
