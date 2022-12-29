import React from 'react';
import Basket from '../components/Basket/Basket'
import styles from '../components/NavBar/navbar.module.scss'

export default {
  title: 'Basket',
  component: Basket,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Basket {...args}  />;