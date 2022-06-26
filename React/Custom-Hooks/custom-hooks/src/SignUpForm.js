import React from "react";
import useFields from "./hooks/useFields";


const SignUpForm = () => {
   const [formData, handleChange, resetForm] =  useFields({
        username: '',
        email: '',
        password: ''
   })
    
    const handleSubmit = e => {
        e.preventDefault();
        resetForm(); 
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label for='username'/>
            <input id='username' type='text' name='username' value={formData.username} onChange={handleChange} placeholder='username' />
            <label for='email'/>
            <input id='email' type='email' name='email' value={formData.email} onChange={handleChange} placeholder='email' />
            <label for='password'/>
            <input id='password' type='password' name='password' value={formData.password} onChange={handleChange} placeholder='password' />
            <button>Submit</button>
        </form>
    )
}


export default SignUpForm; 