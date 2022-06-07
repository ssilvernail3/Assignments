import React, { useState } from "react";
import './NumberGame.css'


const NumberGame = (props) => {
    const genRandom = () => {
        return Math.floor(Math.random() * 10) + 1
    }
    const makeGuess = () => {
        setGuess(genRandom());
        setGuessCount(guessCount + 1)
    }
    const [guess, setGuess] = useState(genRandom());
    const [target, setTarget] = useState(genRandom()); 
    const isWinner = target === guess; 
    const button = <button onClick={makeGuess}>Generate Number</button>
    const restart = () => {
        setTarget(genRandom());
        setGuess(0);
        setGuessCount(0); 
    }
    const [guessCount, setGuessCount] = useState(0); 
    return (
        <div className="NumberGame">
            <h1>Target Num: {target}</h1>
            {/* <h1 style={{color: target === guess ? 'green' : 'red'}}>Your Guess is: { guess }</h1> */}
            <h1 className={isWinner ? 'winner' : 'loser'}>Your Guess is: {guess}</h1>
            <h4>Number of Guesses: { guessCount }</h4>
            {isWinner ? null : button}
            <button onClick={restart}>Restart</button>
        </div>
    )
}

export default NumberGame;