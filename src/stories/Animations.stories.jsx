import React from 'react';

import { Animations } from './Animations';

export default {
  title: 'Animation/Animation Previews',
  component: Animations,
  argTypes: {

  },
};

const Template = (args) => <Animations {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "Slide"
};
Primary.storyName = 'Slide';

export const Fade = Template.bind({});
Fade.args = {
  type: "Fade",
  exit: true
};

export const Expand = Template.bind({});
Expand.args = {
  type: "Expand"
};

export const Push = Template.bind({});
Push.args = {
  type: "Push"
};

export const Reveal = Template.bind({});
Reveal.args = {
  type: "Reveal"
};

export const Zoom = Template.bind({});
Zoom.args = {
  type: "Zoom"
};
