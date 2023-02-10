import React from 'react';

import { ListView } from './ListView';

export default {
  title: 'List View/List View',
  component: ListView,
  argTypes: {

  },
};

const Template = (args) => <ListView {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'List View';
