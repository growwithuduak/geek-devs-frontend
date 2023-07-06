import React, { Fragment } from "react";

import PlaylistItem from "../PlaylistItem/PlaylistItem";
import PlaylistData from "../PlaylistData/PlaylistData";

import './PublicPlaylists.css'

const PublicPlaylists = (props) => {

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
        <Fragment >
            <div className="playlist-body">
                 <h4 className="playlist-heading">Public Playlists</h4>
            <div className="playlist-card">
            {Playlists}
            </div>
            </div>
           
        </Fragment>
    )

}

export default PublicPlaylists;