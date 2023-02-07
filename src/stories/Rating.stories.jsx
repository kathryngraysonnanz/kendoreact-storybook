import React from 'react';

import { Rating } from './Rating';

export default {
  title: 'Inputs/Rating',
  component: Rating,
  argTypes: {

  },
};

const Template = (args) => <Rating {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  readonly: true
};

export const SingleSelection = Template.bind({});
SingleSelection.args = {
  selection: 'single'
};

export const HalfRatings = Template.bind({});
HalfRatings.args = {
  precision: 'half'
};

export const AlternateIcon = Template.bind({});
AlternateIcon.args = {
  icon: 'k-i-heart'
};
