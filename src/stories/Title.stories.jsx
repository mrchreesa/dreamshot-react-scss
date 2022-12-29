import React from 'react';
import Title from '../components/Title/Title'

export default {
  title: 'Title',
  component: Title,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Title {...args}  />;

export const Section = Template.bind({});
