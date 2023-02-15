import React from 'react';

import { TaskBoard } from './TaskBoard';

export default {
  title: 'TaskBoard/TaskBoard',
  component: TaskBoard,
  argTypes: {

  },
};

const Template = (args) => <TaskBoard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'TaskBoard';
