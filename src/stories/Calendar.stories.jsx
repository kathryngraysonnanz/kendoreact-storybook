import React from 'react';

import { Calendar } from './Calendar';

export default {
  title: 'Date Inputs/Calendar',
  component: Calendar,
  argTypes: {

  },
};

const Template = (args) => <Calendar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Calendar';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const FastNav = Template.bind({});
FastNav.args = {
  navigation: false
};
FastNav.storyName = 'No Fast Navigation Bar'

export const WeekNav = Template.bind({});
WeekNav.args = {
  weekNumber: true
};
WeekNav.storyName = 'Week Number Column'
