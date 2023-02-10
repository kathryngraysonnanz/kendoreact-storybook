import React from 'react';

import { PDFViewer } from './PDFViewer';

export default {
  title: 'PDF Viewer/PDF Viewer',
  component: PDFViewer,
  argTypes: {

  },
};

const Template = (args) => <PDFViewer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  
};
Primary.storyName = 'PDF Viewer';
