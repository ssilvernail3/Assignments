import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from "uuid"; 


const ToDoList = () => {
    const [todos, setTodos] = useState([])

    const newTodos = todos.map(todo => <Todo deleteTodo={deleteTodo} id={todo.id} value={todo.value} />)

    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, { ...newTodo, id: uuid() }]);
    }

    const deleteTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }



    return (
        <div>
            <NewTodoForm addTodo={addTodo}/>
            {newTodos}
        </div>
    )
}



export default ToDoList; 