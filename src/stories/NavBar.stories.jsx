import React from 'react';
import NavBar from '../components/NavBar/NavBar'
import styles from '../components/NavBar/navbar.module.scss'

export default {
  title: 'NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <NavBar {...args}  />;
// const Template = (args) => <NavBar {...args} className={styles.container} />;


// export const Default = (args) => <Template {...args} />;

export const About = Template.bind({});

About.args = {
 fontFamily: "Poppins",
 color: "#797979",
 label: 'About',
 size: 'sm'
};

export const CallUs = Template.bind({});

CallUs.args = {
fontFamily: "Poppins",
 color: "#797979",
 label: 'Call Us'
};