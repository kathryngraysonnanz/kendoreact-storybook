import React from 'react';

import { MaskedTextBox } from './MaskedTextBox';

export default {
  title: 'Inputs/Masked TextBox',
  component: MaskedTextBox,
  argTypes: {

  },
};

const Template = (args) => <MaskedTextBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  readonly: true
};
