import React from 'react';

import { MultiSelect } from './MultiSelect';

export default {
  title: 'Dropdowns/MultiSelect',
  component: MultiSelect,
  argTypes: {

  },
};

const Template = (args) => <MultiSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'MultiSelect';
