import React, { Fragment } from "react";
import "./IconButton.css";

const IconButton = (props) => {
    const {size, name, className} = props;

    const classes = "iconButton " + className
    

    return (
        <Fragment >

            <div className={classes} >
                <ion-icon name={name} size={size} className="addIcon" aria-label="Add-Icon"></ion-icon>
            </div>

        </Fragment>
    )

}

export default IconButton;