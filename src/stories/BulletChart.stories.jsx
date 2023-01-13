import React from 'react';

import { BulletChart } from './BulletChart';

export default {
  title: 'Charts/BulletChart',
  component: BulletChart,
  argTypes: {

  },
};

const Template = (args) => <BulletChart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Bullet Chart';
