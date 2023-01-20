import React from 'react';

import { Filter } from './Filter';

export default {
  title: 'Data Tools/Filter',
  component: Filter,
  argTypes: {

  },
};

const Template = (args) => <Filter {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Filter';
