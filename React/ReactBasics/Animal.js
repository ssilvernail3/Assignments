const Animal = (props) => { 
    console.log(props); 
    return (
        <ul>
            <li>Emoji : { props.emoji }</li>
            <li>Name : { props.name }</li>
            <li>Species : {props.species}</li>
            <li>isCute : {props.isCute ? "✅" : "❌"}</li>
            
        </ul>
        
    )
} 