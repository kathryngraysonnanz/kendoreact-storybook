import React from 'react';

import { Window } from './Window';

export default {
  title: 'Dialogs/Window',
  component: Window,
  argTypes: {

  },
};

const Template = (args) => <Window {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Window';
