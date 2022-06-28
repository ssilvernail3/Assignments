import React from "react";

// Component to take form data and create Madlib, accepts restart function as prop to reset state in MadLib Component

const Sentence = ({ noun1, noun2, adj, color, restart }) => {

    return (
        <div> 
            <p>There was a {color} {noun2} that loved a {adj} {noun1} </p>
            <button onClick={restart}>Restart</button>
        </div>
    )
}


export default Sentence; 