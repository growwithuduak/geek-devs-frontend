import React from 'react'
import {Button} from './Components/Button'
import {Nav} from './Components/Nav'

import './App.css'

function App() {

  return (
        <>
        <Nav />
        < div className="myComponent">
        <p>Workspaces <span>+</span> </p>
       <Button text = "Grow with Uduak"></Button>
       <Button text = "Trello Workspace"></Button>
      
        </div>
        </>
  )
}

export default App
