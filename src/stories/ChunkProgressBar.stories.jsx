import React from 'react';

import { ChunkProgressBar } from './ChunkProgressBar';

export default {
  title: 'Progress Bars/Chunk Progress Bar',
  component: ChunkProgressBar,
  argTypes: {

  },
};

const Template = (args) => <ChunkProgressBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  value: null
};
