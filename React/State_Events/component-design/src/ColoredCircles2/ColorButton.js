import React from "react";
import './ColorButtons.css';

const ColorButton = ({ color, addCircle }) => {
    return (
            <button
                onClick={() => addCircle(color)}
                style={{ backgroundColor: color }}
                className='ColorButton'>
                {color}
            </button>)   
    
}

export default ColorButton;