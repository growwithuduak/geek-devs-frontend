import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    color: 'primary',
    label: 'Hello World!',
  },
};

export const Secondary = {
  args: {
    color: 'secondary',
    label: 'Hello World!',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Hello World!',
  },
};

export const Medium = {
  args: {
    size: 'medium',
    label: 'Hello World!',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Hello World!',
  },
};
