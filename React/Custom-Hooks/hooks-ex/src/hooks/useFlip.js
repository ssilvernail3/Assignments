import React, { useState } from "react";


const useFlip = (INITIAL_STATE = true) => {
    const [state, setState] = useState(INITIAL_STATE)
    const toggleState = () => {
        setState(state => !state)
    };

    return [state, toggleState]; 
}



export default useFlip; 