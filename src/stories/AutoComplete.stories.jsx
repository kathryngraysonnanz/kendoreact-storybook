import React from 'react';

import { AutoComplete } from './AutoComplete';

export default {
  title: 'Dropdowns/AutoComplete',
  component: AutoComplete,
  argTypes: {

  },
};

const Template = (args) => <AutoComplete {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Auto Complete';
