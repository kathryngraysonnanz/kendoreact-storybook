import React from 'react';

import { ConversationalUI } from './ConversationalUI';

export default {
  title: 'Conversational UI/Conversational UI',
  component: ConversationalUI,
  argTypes: {

  },
};

const Template = (args) => <ConversationalUI {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Conversational UI';
