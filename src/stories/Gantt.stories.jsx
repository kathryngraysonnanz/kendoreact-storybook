import React from 'react';

import { Gantt } from './Gantt';

export default {
  title: 'Gantt/Gantt',
  component: Gantt,
  argTypes: {

  },
};

const Template = (args) => <Gantt {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.storyName = 'Default';

export const Selectable = Template.bind({});
Selectable.args = {
  selectable: {enabled: true,
          drag: true,
          cell: true,
          mode: 'multiple',
        }
};

export const Sortable = Template.bind({});
Sortable.args = {
  sortable: true
};
