import React from 'react';

import { PivotGrid } from './PivotGrid';

export default {
  title: 'Pivot Grid/Pivot Grid',
  component: PivotGrid,
  argTypes: {

  },
};

const Template = (args) => <PivotGrid {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
Primary.storyName = 'Pivot Grid';
