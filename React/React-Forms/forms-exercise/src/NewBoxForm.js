import React, { useState } from "react";

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        width: '',
        height: '',
        color: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData });
        setFormData(INITIAL_STATE); 

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width</label>
            <input 
                type='text'
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange} 
            />
            <label htmlFor="Height">Height</label>
            <input 
                type='text'
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange} 
            />
            <label htmlFor="color">Color</label>
            <input 
                type='text'
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange} 
            />
            <button>Add Box!</button>
        </form>
    )

}


export default NewBoxForm; 