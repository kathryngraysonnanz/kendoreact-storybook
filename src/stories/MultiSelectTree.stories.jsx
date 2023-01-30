import React from 'react';

import { MultiSelectTree } from './MultiSelectTree';

export default {
  title: 'Dropdowns/MultiSelectTree',
  component: MultiSelectTree,
  argTypes: {

  },
};

const Template = (args) => <MultiSelectTree {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'MultiSelectTree';
