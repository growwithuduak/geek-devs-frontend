import {screen, render} from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"

import "@testing-library/jest-dom"

import IconButton from "../IconButton"

// test if icon is displayed
// test if button performs action as intended

describe("IconButton Component", () => {

    test("render add icon", () => {
        render(<IconButton />)

        const addIcon = screen.getByText("add", {expect: false});
        expect(addIcon).toBeInTheDocument();
    })



}) 