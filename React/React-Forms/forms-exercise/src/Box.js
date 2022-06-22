import React from "react";

const Box = ({ id, width, height, color, deleteBox }) => {
    const remove = () => deleteBox(id); 
    return (
        <div style={{ backgroundColor: color, width: `${width}px`, height: `${height}px` }}>
            <button onClick={remove}>X</button>
        </div>
    )
}

export default Box; 