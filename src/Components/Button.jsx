import React from "react";
import { useState } from "react"
import '../Button.css'


export const Button = (props)=> {

    const [expand, setExpand] = useState(false);
    const toggleExpand = () => setExpand(prevExpand => !prevExpand)
    
    return (
        <>
        <button className="btn"  onClick={toggleExpand}> {props.text}  </button>
        {
            expand &&
            <ul>
            <li>Boards</li>
            <li>Highlights</li>
            <li>Views</li>
            <li>Members</li>
            <li>Settings</li>
            
        </ul>
        }
        
          
        </>
      
    )
}


