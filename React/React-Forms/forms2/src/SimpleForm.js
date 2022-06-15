import React, { useState } from "react";

const SimpleForm = () => {
    const INITIAL_STATE = {
        email: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const [isInvalid, setIsInvalid] = useState(true);
    const [isTouched, setIsTouched] = useState(false);
    const handleChange = e => {
        setIsTouched(true);
        const { name, value } = e.target;
        if (value === '') {
            setIsInvalid(true)

        } else {
            setIsInvalid(false);
        }

        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email } = formData; 
        if (!isInvalid) {
            alert(`Added you to the mailing list, ${email}`);
            setFormData(INITIAL_STATE); 
        }
        
    }


    return (
        <form onSubmit={handleSubmit}>
            <h3>Simple Form</h3>
            <label htmlFor="email">Email</label>
            <input 
                type="email"
                placeholder="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
            />
            { isInvalid && isTouched && <span style={{ color: 'red' }}>Email Cannot Be Blank!</span>}
            <button>Submit</button>
        </form>
    )

}

export default SimpleForm;