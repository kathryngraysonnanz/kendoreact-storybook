import React from 'react';

import { MultiViewCalendar } from './MultiViewCalendar';

export default {
  title: 'Date Inputs/MultiViewCalendar',
  component: MultiViewCalendar,
  argTypes: {

  },
};

const Template = (args) => <MultiViewCalendar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const MultipleViews = Template.bind({});
MultipleViews.args = {
  views: 4
};

export const WeekNumbers = Template.bind({});
WeekNumbers.args = {
  weekNumber: true
};
