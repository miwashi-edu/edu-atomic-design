import React from 'react';
import LogoImage from '../components/atoms/LogoImage';

export default {
    title: 'Components/Atoms/LogoImage',
    component: LogoImage,
    argTypes: {
    },
};

const Template = (args) => <LogoImage {...args} />;

export const Default = Template.bind({});
Default.args = {
};