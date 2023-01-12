import React from 'react';

import { Chip } from './Chip';

export default {
  title: 'Buttons/Chip',
  component: Chip,
  argTypes: {

  },
};

const Template = (args) => <Chip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Removable = Template.bind({});
Removable.args = {
  removable: true,
};
