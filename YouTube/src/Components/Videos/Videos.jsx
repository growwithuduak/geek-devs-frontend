import React from "react";
import IMAGES from "../Images";
import VideoItem from "./VideoItem";


const Videos = () => {

    const VIDEOS_INFO = [
        {
            id: 1,
           image: IMAGES.imageTwo,
           title: "Beginners guide to Go lang",
           author: "Free Code Camp",
           alt: "image one"
        },
        {
            id: 2,
            image: IMAGES.imageTwo,
            title: "Keynote session on Google io 2023",
            author: "Google Deveopers",
            alt: "image two"
         }
    ]

    return(
        <div>
            <h2>Video Item</h2>
            {VIDEOS_INFO.map((item) => {
                <VideoItem 
                    key = {item.id}
                    title = {item.title}
                    image = {item.image}
                    alt = {item.alt}
                    author = {item.author}
                />
            })}
        </div>
    )
}

export default Videos;