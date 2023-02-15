import React from 'react';

import { Upload } from './Upload';

export default {
  title: 'Upload/Upload',
  component: Upload,
  argTypes: {

  },
};

const Template = (args) => <Upload {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Upload';
