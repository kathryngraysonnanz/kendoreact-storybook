import React from 'react';

import { Icons } from './Icons';

export default {
  title: 'Utilities/Icons',
  component: Icons,
  argTypes: {

  },
};

const Template = (args) => <Icons {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Icons';
