import React from 'react';

import { Spreadsheet } from './Spreadsheet';

export default {
  title: 'Spreadsheet/Spreadsheet',
  component: Spreadsheet,
  argTypes: {

  },
};

const Template = (args) => <Spreadsheet {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Spreadsheet';
