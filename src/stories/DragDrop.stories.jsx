import React from 'react';

import { DragDrop } from './DragDrop';

export default {
  title: 'Utilities/Drag & Drop',
  component: DragDrop,
  argTypes: {

  },
};

const Template = (args) => <DragDrop {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Drag & Drop';
