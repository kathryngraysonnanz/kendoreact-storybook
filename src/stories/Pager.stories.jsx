import React from 'react';

import { Pager } from './Pager';

export default {
  title: 'Data Tools/Pager',
  component: Pager,
  argTypes: {

  },
};

const Template = (args) => <Pager {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Pager';
