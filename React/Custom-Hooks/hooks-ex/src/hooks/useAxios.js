import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";


const useAxios = (url) => {
    const [state, setState] = useState(url); 
    const addCard = async () => {
            const response = await axios.get(url);
            setState(state => [...state, { ...response.data, id: uuid() }]);
        
    }

    return [state, addCard]; 
}


export default useAxios; 