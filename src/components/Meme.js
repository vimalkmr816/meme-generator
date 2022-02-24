import React from 'react'
import '../App.css'
const Meme = ({ meme }) => {

    return (

        <div className='meme-card' key={meme.id} >
            <img src={meme.url} className='meme-img' alt={meme.title} />
        </div>
    )
}

export default Meme
