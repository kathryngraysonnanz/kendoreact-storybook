import React from 'react';

import { DataGrid } from './DataGrid';

export default {
  title: 'Data Grid/DataGrid',
  component: DataGrid,
  argTypes: {

  },
};

const Template = (args) => <DataGrid {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Data Grid';
