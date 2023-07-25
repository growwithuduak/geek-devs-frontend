import {render, screen} from "@testing-library/react"

import IconButton from "../IconButton";

test ( "should throw an error when button component has no named icon, named size and mode ", () => {
    render (<IconButton />)

})

test ( "should display button component in primary mode", () => {
    render (<IconButton />)

})

test ( "should display primary button component with specific named icon", () => {
    render (<IconButton />)

})

test ( "should display primary Icon button component with medium size ", () => {
    render (<IconButton />)

})

test ( "should display primary Icon button component with large size ", () => {
    render (<IconButton />)

})

test ( "should throw an error when specific sized Icon button component is not in primary mode ", () => {
    render (<IconButton />)

})

test ( "should throw an error when primary Icon button component has no specific size ", () => {
    render (<IconButton />)

})