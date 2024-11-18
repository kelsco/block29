import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'


function App() {
    const [puppyId, setPuppyId] = useState(null)

    return (
        <Routes>
            <Route path="/" element={<AllPlayers setPuppyId={setPuppyId}/>} />
            <Route path="/player" element={<SinglePlayer puppyId={puppyId}/>} />
        
        </Routes>
    )

}

export default App
