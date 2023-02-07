import React from 'react';

import { Error } from './Error';

export default {
  title: 'Labels/Error',
  component: Error,
  argTypes: {

  },
};

const Template = (args) => <Error {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Error';
