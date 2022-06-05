const Bouncer = (props) => {
    let reply;
    if (props.age < 18) {
        reply = 'Sorry kid you cant come in'
    } else if (props.age < 21) {
        reply = 'You can come in but you cant drink'
    } else {
        reply =
            <span>
                You can come in and you can drink!
                {/* <img cross-origin src="https://giphy.com/clips/pussinboots-puss-in-boots-movie-MMHyzAoLp9HDIurxXb"/> */}
            </span>
    }
    return (
        <div>
            <p>
                <b> Bouncer: How old are you?</b>
            </p>
            <p>
                <b>You: I am {props.age} years old! </b>
            </p>
            <p>
                <b>Bouncer: </b>  { reply }
            </p>
        </div>
    )
}