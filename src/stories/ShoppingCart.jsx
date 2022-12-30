import React from 'react';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'

export default {
  title: 'ShoppingCart',
  component: ShoppingCart,
  parameters: {
    layout: 'fullscreen',
  },
 
};

const Template = (args) => <ShoppingCart {...args}  />;
export const OrderReview = Template.bind({});
