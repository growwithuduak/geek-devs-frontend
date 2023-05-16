import React from "react";
import VideoItem from "./VideoItem"


const Videos = (props) => {
    

    const VIDEOS_INFO = [
        {
           id: 1,
           image: "/Asset/Go Tutorial.png",
           title: "Beginners guide to Go lang",
           author: "Free Code Camp",
           alt: "image one"
        },
        {
            id: 2,
            image: "/Asset/Google io.jpg",
            title: "Keynote session on Google io 2023",
            author: "Google Deveopers",
            alt: "image two"
         }
    ]
    
    const video = VIDEOS_INFO.map(item => {
       return <VideoItem 
        key = {item.id}
        title = {item.title}
        image = {item.image}
        alt = {item.alt}
        author = {item.author}
        />
    })

    return(
        <div>
            <h2>Video Item</h2>
            {video}
        </div>
    )
}

export default Videos;