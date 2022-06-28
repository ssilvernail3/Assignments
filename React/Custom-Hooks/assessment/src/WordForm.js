
import React, { useState } from "react";


//WordForm 
const WordForm = ({ addWords }) => {
    //Sets INITIAL_STATE to an object with empty values
    const INITIAL_STATE = {
        noun1: '',
        noun2: '',
        adj: '',
        color: ''
    }

    //Establish state for formData
    const [formData, setFormData] = useState(INITIAL_STATE); 
    const [isInvalid, setIsInvalid] = useState(true);
    const [isTouched, setIsTouched] = useState(false);

    //Handle change function for formData
    const handleChange = (e) => {
        setIsTouched(true);
        const { name, value } = e.target;
        if (value === '') {
            setIsInvalid(true)

        } else {
            setIsInvalid(false);
        }
        setFormData(formData => ({
            ...formData,
            [name] : value
        }))
    }


 

    //Handles formData submission, lifts state and resets formData to INITIAL STATE
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isInvalid) {
            addWords({ ...formData });
            setFormData(INITIAL_STATE);  
        } 
        

    }

    //Returns a H1 and FORM for user to create madlib
    return (
    <div>
        <h1>MadLibs!</h1>
        <form onSubmit={handleSubmit}>
            
            <input
                id="noun1"
                type='text'
                name='noun1'
                placeholder='noun1'
                value={formData.noun1}
                onChange={handleChange}
            />
           
            <input
                id="noun2"
                type='text'
                name='noun2'
                placeholder='noun2'
                value={formData.noun2}
                onChange={handleChange}
            />
           
            <input
                id="adj"
                type='text'
                name='adj'
                placeholder='adjective'
                value={formData.adj}
                onChange={handleChange}
            />
           
            <input
                id="color"
                type='text'
                name='color'
                placeholder='color'
                value={formData.color}
                onChange={handleChange}
            />
            
            <button>Make MadLib!</button>
        </form>
    </div> 
    )
}

export default WordForm; 