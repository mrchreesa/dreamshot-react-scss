import React from 'react';
import Basket from '../components/Basket/Basket'

export default {
  title: 'Basket',
  component: Basket,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Basket {...args}  />;
// export const BasketComponent = Template.bind({});
