import React from 'react';

import { Popup } from './Popup';

export default {
  title: 'Popup/Popup',
  component: Popup,
  argTypes: {

  },
};

const Template = (args) => <Popup {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
Primary.storyName = 'Popup';
