import React, { useState } from "react";

const NewItemForm = ({addItem}) => {
    const INITIAL_STATE = {
        name: '',
        qty: ''
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
        addItem({ ...formData });
        setFormData(INITIAL_STATE); 

    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Product</label>
            <input
                id="name"
                type='text'
                name='name'
                placeholder='product name'
                value={formData.name}
                onChange={handleChange}
            />
            <label htmlFor='qty'>Quantity</label>
            <input
                id='qty'
                name="qty"
                type='range'
                min='1'
                max='10'
                value={formData.qty}
                onChange={handleChange}
            />
            {/* <input
                id="qty"
                type='text'
                name='qty'
                placeholder='product qty'
                value={formData.qty}
                onChange={handleChange}
            /> */}
            
            <button>Add Item</button>
        </form>
        
    )
}

export default NewItemForm; 