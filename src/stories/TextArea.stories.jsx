import React from 'react';

import { TextArea } from './TextArea';

export default {
  title: 'Inputs/TextArea',
  component: TextArea,
  argTypes: {

  },
};

const Template = (args) => <TextArea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
