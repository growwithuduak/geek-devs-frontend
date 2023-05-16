import React from "react";
import VideoItem from "./VideoItem";
import VideosCard from "../UI/VideosCard";


const Videos = () => {
    

    const VIDEOS_INFO = [
        {
           id: 1,
           image: "/Asset/Go Tutorial.png",
           title: "Beginners guide to Go lang",
           author: "FreeCode Camp",
           alt: "image one"
        },
        {
            id: 2,
            image: "/Asset/Google io.jpg",
            title: "Keynote session on Google io 2023",
            author: "Google Deveopers",
            alt: "image two"
         },
         {
            id: 3,
            image: "/Asset/NodeJs ssl.jpg",
            title: "How to install NodeJs ssl certification",
            author: "Node Js",
            alt: "image three"
         },
         {
            id: 4,
            image: "/Asset/ReactJs Tutorial.jpg",
            title: "How to build a YouTube app using React",
            author: "React Dev",
            alt: "image four"
         },
         {
            id: 5,
            image: "/Asset/Spicy Chicken.jpg",
            title: "How to make tasty, spicy fried chicken",
            author: "Chicken chef",
            alt: "image five"
         },
         {
            id: 6,
            image: "/Asset/Google Bard.jpg",
            title: "Bard, an AI experiment by Google",
            author: "Google Deveopers",
            alt: "image six"
         },
         {
            id: 7,
            image: "/Asset/WWDC 2023.jpg",
            title: "Apple WWDC 2023 Keynote session",
            author: "Apple",
            alt: "image seven"
         },
         {
            id: 8,
            image: "/Asset/Amazon HQ.jpg",
            title: "Inside Amazon latest news update",
            author: "Amazon",
            alt: "image eight"
         },
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
            <div className="videos">
               {video} 
            </div>
                    
        </div>
    )
}

export default Videos;