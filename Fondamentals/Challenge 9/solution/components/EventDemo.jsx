import React, { useState } from 'react';




const EventDemo = () => {
    const [text, setText] = useState('text to be changed');
    const [colors, setColors] = useState('black');
    const [cpyText, setCpyText] = useState('text to be copied');


    return (
        <>
            <button onClick={() => setText('Button Clicked!')}>Click Me!</button>
            <div>
                <p>{text}</p>
            </div>

            <div>
                <p onCopy={() => setCpyText('Text Copied!')}>{cpyText}</p>
            </div>

            <div>
                <p style={{color : colors}}  onMouseOver={() => setColors('lightyellow')}>Text to change color on hover</p>
            </div>
        
        </>
    )
}

export default EventDemo
