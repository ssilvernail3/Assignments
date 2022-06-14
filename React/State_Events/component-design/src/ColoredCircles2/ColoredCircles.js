import React, { useState } from "react";
import Circle from "./Circle";
import ColorButtons from "./ColorButtons";


function getRandom(min = 0, max = 100) {
    return Math.random() * (max - min) + min;
}

const ColoredCircles = () => {
    const [circles, setCircles] = useState([]);
    const addCircle = (color) => {
        setCircles(circles => ([...circles, color])
            
        )
    }
    // const changePosition = idx => {
    //     setCircles(circles => {
    //         const copy = [...circles];
    //         copy[idx].x = getRandom();
    //         copy[idx].y = getRandom();
    //         return copy; 
    //     })
    // }
    // const changePosition = idx => {
    //     setCircles(circles => (
    //         circles.map((circle, i) => (
    //             i === idx ?
    //                 { ...circle, x: getRandom(), y: getRandom() }
    //                 : circle
    //         ))
    //     ))
    // }


    return (
        <div>
            <ColorButtons addCircle={addCircle} options={['peachpuff', 'lightsteelblue', 'paleturquoise']} />
            {circles.map((color, idx) => (
                <Circle
                    color={color}
                    idx={idx}
                    key={idx}
                />
            ))}
            
        </div>
    )
}


export default ColoredCircles; 