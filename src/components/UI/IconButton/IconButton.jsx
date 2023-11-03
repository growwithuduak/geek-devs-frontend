import React, { Fragment } from "react";
import PropTypes from 'prop-types';

import "./IconButton.css";


const IconButton = (props) => {

    const {primary, iconName, iconSize, className} = props;

    const mode = primary ? "icon-button--primary " : "null"

    const classes = "icon-button " + `icon-button--${iconSize} ` +  mode + className


    return (
        <Fragment >

            <button className={classes} type="button" >   
                <ion-icon name={iconName} size={iconSize} aria-label="Icon-Button" ></ion-icon>
            </button>

        </Fragment>
    )

}

IconButton.propTypes = {
    primary: PropTypes.bool.isRequired,
    iconName: PropTypes.string.isRequired,
    iconSize: PropTypes.string,
    className: PropTypes.string,
}

IconButton.defaultProps = {
    iconSize: "large",
}

export default IconButton;