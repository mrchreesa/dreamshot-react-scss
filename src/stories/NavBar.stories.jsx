import React from 'react';
import NavBar from '../components/NavBar/NavBar'
import {within, userEvent} from '@storybook/testing-library'

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

About.play = async ({canvasElement}) => {
  const canvas = within({canvasElement});
  const aboutButton = await canvas.getByTestId("about");
  await userEvent.click(aboutButton);
};

export const CallUs = Template.bind({});

CallUs.args = {
fontFamily: "Poppins",
 color: "#797979",
 label: 'Call Us'
};