import React from 'react';

import { MultiColumnComboBox } from './MultiColumnComboBox';

export default {
  title: 'Dropdowns/MultiColumnComboBox',
  component: MultiColumnComboBox,
  argTypes: {

  },
};

const Template = (args) => <MultiColumnComboBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Multi Column Combo Box';
