import IconButton from "./IconButton";

export default {
    title: 'UI / IconButton',
    component: IconButton,
    tags: ["autodocs"],
};

export const Primary = {
    args: {
        primary: true,
    }
}

export const Medium = {
    args: {
        iconSize: "medium",
    }
}

export const Large = {
    args: {
        iconSize: "large"
    }
}