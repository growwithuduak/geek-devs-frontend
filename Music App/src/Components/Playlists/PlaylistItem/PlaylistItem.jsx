import React, { Fragment } from "react"
import IconButton from "../../UI/IconButton/IconButton";

import "./PlaylistItem.css"

const PlaylistItem = (props) => {

    const {image, alt, musicCount, streamCount, commentCount } = props

    return (
        <Fragment>
            <div className="playlistCard">

            <IconButton className="playlistIconButton" />
            <img className="playlistImage" src={image} alt={alt}  />
            <h4 className="playlistDescription">
                <span className="playlistCount"><ion-icon name="musical-notes-outline"></ion-icon>{musicCount}</span>
                <span className="playlistCount"><ion-icon name="play-circle-outline"></ion-icon>{streamCount}</span>
                <span className="playlistCount"><ion-icon name="reader-outline"></ion-icon>{commentCount}</span>
            </h4>

            </div>

        </Fragment>
    )
};

export default PlaylistItem;