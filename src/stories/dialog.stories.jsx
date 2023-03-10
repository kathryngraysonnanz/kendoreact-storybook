import React from 'react';

import { Dialog } from './Dialog';

export default {
  title: 'Dialogs/Dialog',
  component: Dialog,
  argTypes: {

  },
};

const Template = (args) => <Dialog {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Dialog';
