import React from 'react';

import { SVGIcons } from './SVGIcons';

export default {
  title: 'Common Utilities/SVG Icons',
  component: SVGIcons,
  argTypes: {

  },
};

const Template = (args) => <SVGIcons {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'SVG Icons';
