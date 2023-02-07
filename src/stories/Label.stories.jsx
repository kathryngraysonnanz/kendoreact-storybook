import React from 'react';

import { Label } from './Label';

export default {
  title: 'Labels/Label',
  component: Label,
  argTypes: {

  },
};

const Template = (args) => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Label';
