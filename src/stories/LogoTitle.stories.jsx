import React from 'react';
import LogoTitle from '../components/atoms/LogoTitle';

export default {
  title: 'Components/Atoms/LogoTitle',
  component: LogoTitle,
  argTypes: {
  },
};

const Template = (args) => <LogoTitle {...args}></LogoTitle>;

export const Default = Template.bind({});
Default.args = {
};

