import React, { useState, useEffect } from "react";
import "./App.css";
import Meme from "./Meme";
function App() {
    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => {
                setTemplates(data.data.memes);
            })

    }, []);
    const styles={
        border:'2px solid'
    }
    return (
        <div className="App">
            <h1>Meme Generator</h1>
            <Meme value={templates}/>
        </div >
    );
}

export default App;
