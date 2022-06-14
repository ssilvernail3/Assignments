import React, { useState } from "react";
import Die from "./Die";
import './Dice.css'


const Dice = ({ numDice = 6, title = 'Main Game', mavVal = 20 }) => {
    const dice = []
   
    const [numbers, setNumbers] = useState(Array.from({ length: numDice }));
   
    const rollDice = () => (
        setNumbers(numbers => 
            numbers.map(n => Math.floor(Math.random() * mavVal) + 1))
    )
       
   
    // for (let i = 0; i < numDice; i++){
    //     const num = Math.floor(Math.random() * mavVal) + 1; 
    //     dice.push(num)
    // }
    return (
        <div className="Dice"> 
            <h2>{title}</h2>   
            {numbers.map(n => <Die val={n} />)}
            <div>   
                <button onClick={rollDice}>Roll</button>
            </div>
        </div>
    )
}



export default Dice; 