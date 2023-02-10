import React from 'react';

import { ListBox } from './ListBox';

export default {
  title: 'List Box/List Box',
  component: ListBox,
  argTypes: {

  },
};

const Template = (args) => <ListBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';
