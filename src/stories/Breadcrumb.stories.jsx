import React from 'react';

import { Breadcrumb } from './Breadcrumb';

export default {
  title: 'Layout/Breadcrumb',
  component: Breadcrumb,
  argTypes: {

  },
};

const Template = (args) => <Breadcrumb {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
