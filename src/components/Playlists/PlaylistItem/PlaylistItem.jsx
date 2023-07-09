import React, { Fragment } from "react"

import "./PlaylistItem.css"

const PlaylistItem = (props) => {

    const {image, alt, musicCount, streamCount, duplicateCount } = props

    return (
        <Fragment>
            <div className="playlistCard">

            

            <img className="playlistImage" src={image} alt={alt}  />
            
            <h4 className="playlistDescription">
                <span className="playlistCount"><ion-icon name="musical-notes-outline"></ion-icon>{musicCount}</span>
                <span className="playlistCount"><ion-icon name="play-circle-outline"></ion-icon>{streamCount}</span>
                <span className="playlistCount"><ion-icon name="reader-outline"></ion-icon>{duplicateCount}</span>
            </h4>

            </div>

        </Fragment>
    )
};

export default PlaylistItem;