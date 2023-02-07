import React from 'react';

import { RadioGroup } from './RadioGroup';

export default {
  title: 'Inputs/Radio Group',
  component: RadioGroup,
  argTypes: {

  },
};

const Template = (args) => <RadioGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const HorizontalLayout = Template.bind({});
HorizontalLayout.args = {
  layout: 'horizontal'
};
