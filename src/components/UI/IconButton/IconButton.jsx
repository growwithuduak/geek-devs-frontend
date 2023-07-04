import React, { Fragment } from "react";
import "./IconButton.css";

const IconButton = (props) => {
    const {size, backgroundColor, name} = props;

    

    return (
        <Fragment >

            <button className="iconButton">
                <ion-icon name={name} size={size} className="addIcon" aria-label="Add-Icon"></ion-icon>
            </button>

        </Fragment>
    )

}

export default IconButton;