import React from 'react';

import { Avatar } from './Avatar';

export default {
  title: 'Layout/Avatar',
  component: Avatar,
  argTypes: {

  },
};

const Template = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    type: 'image'
};
Primary.storyName = 'Image';

export const Text = Template.bind({});
Text.args = {
    type: 'text'
};

export const Icon = Template.bind({});
Icon.args = {
    type: 'icon'
};
