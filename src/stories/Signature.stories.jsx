import React from 'react';

import { Signature } from './Signature';

export default {
  title: 'Inputs/Signature',
  component: Signature,
  argTypes: {

  },
};

const Template = (args) => <Signature {...args} />;

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

export const LineSmoothing = Template.bind({});
LineSmoothing.args = {
  smooth: true
};

export const NoPopUp = Template.bind({});
NoPopUp.args = {
  maximizable: false
};
