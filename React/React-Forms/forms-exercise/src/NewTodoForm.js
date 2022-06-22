import React, { useState } from "react";


const NewTodoForm = ({addTodo}) => {
    const INITIAL_STATE = {
            value: ''
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
            addTodo({ ...formData });
            setFormData(INITIAL_STATE); 
    
        }
    
        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">New Todo</label>
                <input 
                    type='text'
                    id="todo"
                    name="todo"
                    value={formData.value}
                    onChange={handleChange} 
                />
                <button>Add Todo!</button>
            </form>
        )
    
    }
    



export default NewTodoForm; 