import React from "react";

const ButtonGroup = () => {
    const printColor = (color) => {
        console.log(`You clicked ${color.toUpperCase()}!`)
    }
    return (
        <div>
            <button onClick={() => printColor('Red')}>Red</button>
            <button onClick={() => printColor('Yellow')}>Yellow</button>
            <button onClick={() => printColor('Green')}>Green</button>
        </div>
    )
}

export default ButtonGroup; 