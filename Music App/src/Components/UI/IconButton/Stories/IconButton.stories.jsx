import IconButton from "../IconButton";

export default {
    title: "Icon Button",
    component: IconButton,
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
    },
};
  
  // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
    args: {
      primary: true,
      label: 'Button',
    },
};
  
export const Secondary = {
    args: {
      label: 'Button',
    },
};
  
export const Large = {
    args: {
      size: 'large',
      label: 'Button',
    },
};
  
export const Small = {
    args: {
      size: 'small',
      label: 'Button',
    },
};  