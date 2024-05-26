import React from 'react';
import Logo from '../components/molecules/Logo';

export default {
  title: 'Components/Molecules/Logo',
  component: Logo,
  argTypes: {
  },
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
};

