import React from "react";

const Clicker = () => {
    const fireLasers = (e) => {
        const data = {
            name: 'Willy WOnka',
            age: 78
        }
        console.log(data);
        console.log(e)
        console.log('The lasers have been fired')
        console.log('PEW PEW!!')
    }
    return (
        <>
            <button onMouseOver={fireLasers}>Click Me!</button>
            <textarea onScroll={fireLasers} rows='2'>
                jaksl ajksl ajskl ajk
                jaksl ajksl ajskl ajk
                jaksl ajksl ajskl ajk
                jaksl ajksl ajskl ajk
                jaksl ajksl ajskl ajk
                jaksl ajksl ajskl ajk
                jaksl ajksl ajskl ajk
                jaksl ajksl ajskl ajk
                jaksl ajksl ajskl ajk
            </textarea>
        </>
        
    )
}

export default Clicker;