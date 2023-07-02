import {screen, render} from "@testing-library/react"

import { IconButton } from "@storybook/components";

describe("IconButton Component", () => {

    test("render add icon", () => {
        render(<IconButton />)

        const addIcon = screen.getByText("add", {expect: false});
        expect(addIcon).toBeInTheDocument();
    })



}) 