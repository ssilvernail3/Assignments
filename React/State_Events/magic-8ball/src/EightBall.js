import React, { useState } from "react";

function randomAnswer (answers){
    const idx = Math.floor(Math.random() * answers.length)
    // console.log(idx);
     return answers[idx]; 
    
}


const EightBall = (props) => {

    const [msg, setMsg] = useState('Think of a Question'); 
    const [color, setColor] = useState('black');
    function newChoice() {
        const { msg, color } = randomAnswer(props.answers);
        setMsg(msg);
        setColor(color); 
    }
   
    return (
        <div className="EightBall">
            <h2 onClick={newChoice} style={{backgroundColor: color}} className="EightBall-header">{ msg }</h2>
        </div>
    )
}

EightBall.defaultProps = {
    answers:
    [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ]
}

export default EightBall; 