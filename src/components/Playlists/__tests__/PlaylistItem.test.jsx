import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect';

import React from "react"

import PlaylistItem from "../PlaylistItem";

test ( "IconButton when in primary mode should have expected class", () => {
    const component = render( <PlaylistItem image="/Assets/Playlist six.jpg" /> )
    const selectedMode = component.getByRole("img")
    
    expect(selectedMode).toHaveAttribute("src")

})