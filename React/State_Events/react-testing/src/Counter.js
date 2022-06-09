import React, { useState } from "react";

const Counter = (props) => {
    const [count, setCount] = useState(0) 
    const increment = () => setCount(count + 2);
    const decrement = () => setCount(count - 1);
    return (
        <>
            <h1>Let's Count!</h1>
            <h2>Current count : {count}</h2>
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Subtract</button>
            <label for="usr">Username</label>
            <input id="usr" type='text' placeholder="username"/>
        </>
    )
}


export default Counter;  