import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect';

import React from "react"

import IconButton from "../IconButton";

test ( "IconButton when in primary mode should have expected class", () => {
    const component = render( <IconButton primary iconName="add-outline" data-testid="icon1" /> )
    const selectedMode = component.getByTestId("icon1")
    
    expect(selectedMode).toHaveClass("icon-button--primary")

})

 


// WHAT TO TEST IN ICONBUTTON.JSX

// should display button component in primary mode
// should throw an error when button component has no named icon, named size and mode

// should display primary button component with specific named icon
// should display primary Icon button component with medium size

// should display primary Icon button component with large size
// test ( "should throw an error when specific sized Icon button component is not in primary mode ", 

// test ( "should throw an error when primary Icon button component has no specific size ",
