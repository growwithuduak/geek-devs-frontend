import React, { Fragment } from "react";
import "./IconButton.css";

const RoundIconButton = (props) => {
    const {type} = props;

    return (
        <Fragment >

            <div className="iconButton">
                <ion-icon name="add-outline" className="addIcon"></ion-icon>
            </div>

        </Fragment>
    )

}

export default RoundIconButton;