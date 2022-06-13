import React, { useState } from "react";
import NumberItem from "./NumberItem";

const NumbersList = () => {
    const [numbers, setNumbers] = useState([2, 5, 7, 11, 12, 18]);
    const remove = (num) => {
        console.log('Removing', num)
        setNumbers(numbers.filter(n => n !== num));
    }
    return (
        <ul>
            {numbers.map(n => (
               <NumberItem number={n} remove={() => remove(n)} key={n} />
            ))}
        </ul>
    )
}


export default NumbersList; 