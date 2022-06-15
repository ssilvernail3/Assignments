import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid"; 

const BoxList = () => {
    
    const INITIAL_STATE = {
        id: uuid(),
        width: '20px',
        height: '20px',
        color: 'seafoamgreen'
    }
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }]);
    }
    const deleteBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    return (
        <div>
            
            <NewBoxForm addBox={addBox} />
        
            {boxes.map(box => (<Box id={box.id} width={box.width} height={box.height} color={box.color} deleteBox={deleteBox} />))}
           
        </div>
    )
}


export default BoxList; 