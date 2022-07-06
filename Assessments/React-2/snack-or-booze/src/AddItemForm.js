import React, { useState } from 'react';


const AddItemForm = ({addSnack}) => {
    const[formData, setFormData] = useState([]) 

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        addSnack(formData);
        setFormData([]);
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <h3>Add a Snack!</h3>
            <input type='text' name='snackname' placeholder='Name'/>
            <input type='text' name='snackdescription' placeholder='Description'/>
            <input type='text' name='snackrecipe' placeholder='Recipe'/>
            <input type='text' name='snackserve' placeholder='Service' />
            <button>Add!</button>
        </form>
    )
}

export default AddItemForm; 