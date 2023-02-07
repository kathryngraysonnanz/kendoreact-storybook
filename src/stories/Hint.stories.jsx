import React from 'react';

import { Hint } from './Hint';

export default {
  title: 'Labels/Hint',
  component: Hint,
  argTypes: {

  },
};

const Template = (args) => <Hint {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Hint';
