import React from 'react';

import { DatePicker } from './DatePicker';

export default {
  title: 'Date Inputs/Date Picker',
  component: DatePicker,
  argTypes: {

  },
};

const Template = (args) => <DatePicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const WeekNumbers = Template.bind({});
WeekNumbers.args = {
  weekNumber: true,
  show: true
};
