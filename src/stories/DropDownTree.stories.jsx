import React from 'react';

import { DropDownTree } from './DropDownTree';

export default {
  title: 'Dropdowns/DropDown Tree',
  component: DropDownTree,
  argTypes: {

  },
};

const Template = (args) => <DropDownTree {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'DropDown Tree';
