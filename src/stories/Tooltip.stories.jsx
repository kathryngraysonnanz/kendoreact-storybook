import React from 'react';

import { Tooltip } from './Tooltip';

export default {
  title: 'Tooltips/Tooltip',
  component: Tooltip,
  argTypes: {

  },
};

const Template = (args) => <Tooltip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Tooltip';
