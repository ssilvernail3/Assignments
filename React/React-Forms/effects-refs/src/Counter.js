import React, { useState, useEffect } from "react";

function Counter() {
    const [num, setNum] = useState(0);

    const increment = () => {
        setNum(n => n + 1);
    };
    

    useEffect(() => {
        document.title = `Hi${'!'.repeat(num)}`
    })
    return (
        <div>
            Let's Get Excited
            <button onClick={increment}>Get More Excited!</button>
            <p>Counter: { num }</p>
        </div>
    )
}

export default Counter; 