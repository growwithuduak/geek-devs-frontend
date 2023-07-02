import React, { Fragment } from "react";
import "./IconButton.css";

const IconButton = (props) => {
    const {type} = props;

    return (
        <Fragment >

            <div className="iconButton">
                <ion-icon name="add-outline" size="large" className="addIcon" aria-label="Add-Icon"></ion-icon>
            </div>

        </Fragment>
    )

}

export default IconButton;