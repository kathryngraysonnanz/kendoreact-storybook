import React from 'react';

import { DropDownList } from './DropDownList';

export default {
  title: 'Dropdowns/DropDown List',
  component: DropDownList,
  argTypes: {

  },
};

const Template = (args) => <DropDownList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'DropDown List';
