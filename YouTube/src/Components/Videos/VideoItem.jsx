import React from "react";
import "./VideoItem.css";

const VideoItem = (props) => {

    const {image, alt, title, author} = props;

    return (
        <div className="video-item">
            <img src={image} alt={alt} />
            <h3 className="title">{title}</h3>
            <h4 className="author">{author}</h4>
        </div>
    )
}

export default VideoItem;