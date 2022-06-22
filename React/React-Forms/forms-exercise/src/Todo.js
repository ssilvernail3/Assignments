import React from "react";

const Todo = ({ id, value, deleteTodo}) => {
    const remove = () => deleteTodo(id)
    return (
        <div>
            <li>{value}</li>
            <button>X</button>
        </div>
    )
}



export default Todo; 