import React from 'react';

import { Form } from './Form';

export default {
  title: 'Form/Form',
  component: Form,
  argTypes: {

  },
};

const Template = (args) => <Form {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Form';
