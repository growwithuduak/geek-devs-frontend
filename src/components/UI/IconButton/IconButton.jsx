import React, { Fragment } from "react";
import PropTypes from 'prop-types';

import "./IconButton.css";

const IconButton = (props) => {
    const {size, iconName, className} = props;

    const classes = "iconButton " + className
    

    return (
        <Fragment >
            <button className={classes} >
                <ion-icon iconName={iconName} size={size} aria-label="Icon-Button"></ion-icon>
            </button>

        </Fragment>
    )

}

IconButton.propTypes = {
    iconName: PropTypes.string.isRequired,
    size: PropTypes.string,
    className: PropTypes.string,
}

export default IconButton;