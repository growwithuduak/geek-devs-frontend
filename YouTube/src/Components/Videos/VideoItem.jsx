import React from "react";

const VideoItem = (props) => {

    const {image, alt, title, author} = props;

    return (
        <div>
            <img src={image} alt={alt} />
            <h3>{title}</h3>
            <h4>{author}</h4>
        </div>
    )
}

export default VideoItem;