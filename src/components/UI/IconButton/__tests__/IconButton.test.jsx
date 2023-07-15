import IconButton from "../IconButton";
import {render, screen} from "@testing-library/react"


describe("Icon Button component", () => {
    
    it("renders icon name", () => {
        render( <IconButton iconName="add-outline"/>)
        expect().toBeInTheDocument()
    })


})