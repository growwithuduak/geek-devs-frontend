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
            <li className="space-list">Boards</li>
            <li className="space-list">Highlights</li>
            <li className="space-list">Views</li>
            <li className="space-list">Members</li>
            <li className="space-list">Settings</li>
            
        </ul>
        }
        
          
        </>
      
    )
}


