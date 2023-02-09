import React from 'react';

import { PanelBar } from './PanelBar';

export default {
  title: 'Layout/Panel Bar',
  component: PanelBar,
  argTypes: {

  },
};

const Template = (args) => <PanelBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const SingleExpandMode = Template.bind({});
SingleExpandMode.args = {
  expandMode: 'single'
};
