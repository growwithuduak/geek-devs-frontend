import React from "react"
import Videos from "./Components/Videos/Videos";
import VideosCard from "./Components/UI/VideosCard";
import "./App.css"

const App = () => {



    return(
        <div>
            <h1>My App</h1>
                <VideosCard >
                    <Videos className="videos" />
                </VideosCard>
        </div>
    )

}

export default App;