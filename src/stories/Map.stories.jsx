import React from 'react';

import { Map } from './Map';

export default {
  title: 'Map/Map',
  component: Map,
  argTypes: {

  },
};

const Template = (args) => <Map {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const ShapeLayer = Template.bind({});
ShapeLayer.args = {
  shapes: true
};

export const BubbleLayer = Template.bind({});
BubbleLayer.args = {
  bubbles: true
};

export const MarkerLayer = Template.bind({});
MarkerLayer.args = {
  markers: true
};
