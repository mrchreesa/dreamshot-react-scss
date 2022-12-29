import React from 'react';
import Carousel from '../components/Carousel/Carousel'

export default {
  title: 'Carousel',
  component: Carousel,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Carousel {...args}  />;

export const AliceCarousel = Template.bind({});