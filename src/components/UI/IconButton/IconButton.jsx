import React, { Fragment } from "react";
import "./IconButton.css";

const IconButton = (props) => {
    const {size, name, className} = props;

    const classes = "iconButton " + className
    

    return (
        <Fragment >
            <button className={classes} >
                <ion-icon name={name} size={size} aria-label="Icon-Button"></ion-icon>
            </button>

        </Fragment>
    )

}

export default IconButton;