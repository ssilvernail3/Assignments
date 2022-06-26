import React, { useState } from 'react';


const useFields = (INITIAL_STATE) => {
    
    const [formData, setFormData] = useState(INITIAL_STATE)
    
    const handleChange = e => {
        const { value, name } = e.target;
        setFormData(formData => ({
            ...formData, 
            [name] : value
        })) 
    }

    const resetFormData = () => {
        setFormData(INITIAL_STATE);
    }; 

    return [formData, handleChange, resetFormData]; 
}

export default useFields; 

