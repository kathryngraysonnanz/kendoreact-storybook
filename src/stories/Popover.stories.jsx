import React from 'react';

import { Popover } from './Popover';

export default {
  title: 'Tooltips/Popover',
  component: Popover,
  argTypes: {

  },
};

const Template = (args) => <Popover {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Popover';
