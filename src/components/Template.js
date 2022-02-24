import React from 'react'
import Meme from './Meme';
function Template({ templates, setMeme }) {
    return (
        <div className='templates'>
            {templates.map((template) => (
                <div key={template.id} onClick={() => setMeme(template)} className='template-container'>
                    <h5 className='template-title' >{template.name}</h5>
                    <img src={template.url} className='template-img' alt={template.name} />
                </div>
            ))
            }
        </div >
    )
}

export default Template