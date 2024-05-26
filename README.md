# edu-components

## Instructions 

```bash
cd ~
cd ws
git clone https://github.com/miwashi-edu/edu-components.git
cd edu-components
npm init
npm i
```

## Test it

```bash
npm start
```

## Done

[Compare with](https://github.com/miwashi-edu/edu-components-done)


## A story

```js
import React from 'react';
import LogoTitle from '../components/atoms/LogoTitle';

//This is your storybook, the title is how it will be grouped and sorted, and must be unique
//argTypes are all the things you want to control to experiment with your component in storybook
export default {
  title: 'Components/Atoms/LogoTitle',
  component: LogoTitle,
  argTypes: {
  },
};

//Your template is how you will use it
//You can use it as <LogoTitle title={args.title} /> or <LogoTitle>{args.children}</LogoTitle>
const Template = (args) => <LogoTitle {...args}></LogoTitle>;

//This is a story named Default
//In args you add every attribute you want to control, like size, children, tittle
export const Default = Template.bind({});
Default.args = {
};
```


