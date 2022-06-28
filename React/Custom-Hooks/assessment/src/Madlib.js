import React, { useState } from "react";
import WordForm from "./WordForm";
import Sentence from "./Sentence";
import { v4 as uuid } from "uuid"; 


const Madlib = () => {

    //Setting state for words needed in Madlib 
    const [words, setWords] = useState([]); 

    //Function to add words to state to create sentence
    const addWords = (newWords) => {
        setWords(words => [...words, { ...newWords, id: uuid() }])
    }
    //Function to reset state to start a new MadLib
    const restart = () => {
        setWords([])
    }

    //Returns a Word Form to user to input choices for MadLib along with the Sentence after the form is submitted
    return (
        <div>

            <WordForm addWords={addWords} />
            {words.map(({id, noun1, noun2, adj, color}) => <Sentence key={id} noun1={noun1} noun2={noun2} adj={adj} color={color} restart={restart} />)}
            
        </div>
    )
}



export default Madlib; 