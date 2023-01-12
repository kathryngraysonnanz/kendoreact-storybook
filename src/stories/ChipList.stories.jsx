import React from 'react';

import { ChipList } from './ChipList';

export default {
  title: 'Buttons/ChipList',
  component: ChipList,
  argTypes: {

  },
};

const Template = (args) => <ChipList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
