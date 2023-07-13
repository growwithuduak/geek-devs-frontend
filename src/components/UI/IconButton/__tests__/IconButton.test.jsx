import IconButton from "../IconButton";
import {render, screen} from "@testing-library/react"


// test is props renders
// test if iconName is present
// test if IconButton behaves as expected

test("renders Icon Name successfully", () => {
    render( <IconButton iconName = "add-outline" /> )


    expect(screen.getByText(/"add-outline"/.i).toBeInTheDocument())
})