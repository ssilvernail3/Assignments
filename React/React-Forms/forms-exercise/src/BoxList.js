import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid"; 

const BoxList = () => {
    
    const INITIAL_STATE = []
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
        <div>
            {boxes.map(box => <Box id={box.id} width={box.width} height={box.height} color={box.color} deleteBox={deleteBox} />)}
        </div>
        </div>
    )
}


export default BoxList; 