import React from 'react';

import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'Buttons/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
  },
};

const Template = (args) => <ButtonGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
