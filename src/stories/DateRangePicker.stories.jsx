import React from 'react';

import { DateRangePicker } from './DateRangePicker';

export default {
  title: 'Date Inputs/DateRangePicker',
  component: DateRangePicker,
  argTypes: {

  },
};

const Template = (args) => <DateRangePicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const ReverseSelection = Template.bind({});
ReverseSelection.args = {
  allowReverse: true
};

export const SwapDatesToggle = Template.bind({});
SwapDatesToggle.args = {
  allowReverse: true,
  swapButton: true
};
