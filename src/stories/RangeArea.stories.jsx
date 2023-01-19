import React from 'react';

import { RangeArea } from './RangeArea';

export default {
  title: 'Charts/Range Area Chart',
  component: RangeArea,
  argTypes: {

  },
};

const Template = (args) => <RangeArea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Range Area Chart';
