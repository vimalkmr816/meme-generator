import React, { useState } from 'react'
import '../App.css'
const Meme = ({ meme, setMeme }) => {

    const [form, setForm] = useState({
        template_id: meme.id,
        username: 'vimalkmr816',
        password: 'e37hNQtHrHc4psW',
        boxes: []
    })
    const generateMeme = () => {
        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
        // console.log(url);

        form.boxes.map((box, index) => {
            url = url + `&boxes[${index}][text]=${box.text}`
        })
        fetch(url).then(res => res.json()).then(data => {
            setMeme({ ...meme, url: data.data.url })
        })
        // alert('Please set the values before generating meme');

    }
    return (
        <div className='meme-card' key={meme.id} >
            <img src={meme.url} className='meme-img' alt={meme.title} />
            <div className='meme-form'>
                {
                    [...Array(meme.box_count)].map((_, index) =>
                    (
                        < input type="text" key={index} placeholder={`Meme Caption ${index + 1}`} className='meme-form-input'
                            onChange={(e) => {
                                const newBoxes = form.boxes;
                                newBoxes[index] = { text: e.target.value }
                                setForm({ ...form, boxes: newBoxes })
                            }} />
                    )
                    )
                }
                <button className='submit-btn' onClick={generateMeme}>Generate Meme</button>
                <button className='go-back-btn' onClick={() => { setMeme(null) }}>Go Back</button>


            </div>
        </div>
    )
}

export default Meme
