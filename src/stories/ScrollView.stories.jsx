import React from 'react';

import { ScrollView } from './ScrollView';

export default {
  title: 'ScrollView/ScrollView',
  component: ScrollView,
  argTypes: {

  },
};

const Template = (args) => <ScrollView {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
Primary.storyName = 'Default';

export const EndlessScroll = Template.bind({});
EndlessScroll.args = {
  endless: true,
};

export const NoArrows = Template.bind({});
NoArrows.args = {
  arrows: false
};
