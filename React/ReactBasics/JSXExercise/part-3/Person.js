const Person = (props) => {
   let result = props.age >= 18 ? "Go Vote!" : "Go Study!"
    return (
        <p>
            Learn some more about this person!
            <ul>
                <li>{props.name}</li>
                <li>{props.age}</li>
            </ul>
            <h3>{result}</h3>

            <ul>{props.hobbies.map(h => 
                    <li>{ h }</li>
                    )}
            </ul>
        </p>
    )
}

