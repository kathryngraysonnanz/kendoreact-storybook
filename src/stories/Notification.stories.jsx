import React from 'react';

import { Notification } from './Notification';

export default {
  title: 'Notification/Notification',
  component: Notification,
  argTypes: {

  },
};

const Template = (args) => <Notification {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'none'
};
Primary.storyName = 'Default';

export const Error = Template.bind({});
Error.args = {
  type: 'error'
};

export const Success = Template.bind({});
Success.args = {
  type: 'success'
};

export const Info = Template.bind({});
Info.args = {
  type: 'info'
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning'
};
