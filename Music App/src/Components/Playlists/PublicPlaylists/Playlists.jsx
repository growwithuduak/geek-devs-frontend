import React, { Fragment } from "react";

import PlaylistItem from "../PlaylistItem/PlaylistItem";
import PlaylistData from "../PlaylistData/PlaylistData";

const Playlists = (props) => {

    const Playlists = PlaylistData.map(item => {
        return <PlaylistItem
            key = {item.id}
            image = {item.image}
            alt = {item.alt}
            musicCount = {item.musicCount}
            streamCount = {item.streamCount}
            commentCount = {item.commentCount}
        />

    })

    return (
        <Fragment>
            <h4>Public Playlists</h4>
            {Playlists}
        </Fragment>
    )

}

export default Playlists;