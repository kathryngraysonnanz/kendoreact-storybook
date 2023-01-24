import React from 'react';

import { ComboBox } from './ComboBox';

export default {
  title: 'Dropdowns/ComboBox',
  component: ComboBox,
  argTypes: {

  },
};

const Template = (args) => <ComboBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'ComboBox';
