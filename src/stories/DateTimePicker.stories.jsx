import React from 'react';

import { DateTimePicker } from './DateTimePicker';

export default {
  title: 'Date Inputs/DateTime Picker',
  component: DateTimePicker,
  argTypes: {

  },
};

const Template = (args) => <DateTimePicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
