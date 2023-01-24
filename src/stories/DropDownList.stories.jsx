import React from 'react';

import { DropDownList } from './DropDownList';

export default {
  title: 'Dropdowns/DropDownList',
  component: DropDownList,
  argTypes: {

  },
};

const Template = (args) => <DropDownList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'DropDownList';
