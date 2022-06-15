import React from "react";

const Box = ({ width, height, color, deleteBox }) => {
    return (
        <div style={{ backgroundColor: color, width: width, height: height }}>
            <button onClick={deleteBox}>X</button>
        </div>
    )
}

export default Box; 