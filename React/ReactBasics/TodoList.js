const TodoList = (props) => {
    // const todos = [
    //     <li>Walk Chickens</li>,
    //     <li>Feed Dexter</li>,
    //     <li>Go to Gym</li>
    // ]


    return (
        <div>
            <h4>Todo List</h4>
            <ul>{props.todos.map(t =>
            (
                <li>
                    <input type="checkbox"/>
                    <b>{ t }</b>
                </li>
            )
            )}</ul>
        </div>
    )
}