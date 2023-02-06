import React from 'react';

import { Editor } from './Editor';

export default {
  title: 'Editor/Editor',
  component: Editor,
  argTypes: {

  },
};

const Template = (args) => <Editor {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Editor';
