import React from "react";

const VideoItem = (props) => {

    const {title, image, author, alt} = props;

    return (
        <div>
            <img src = {image} alt = {alt}> </img>
            <h3>{title}</h3>
            <h4>{author}</h4>
        </div>
    )
}

export default VideoItem;