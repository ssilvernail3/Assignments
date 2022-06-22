import React from 'react';
import './App.css';
import BoxList from './BoxList';
import NewBoxForm from './NewBoxForm';
import ToDoList from './TodoList';

function App() {
  return (
    <div className="App">
      {/* <BoxList /> */}
      <ToDoList />
    </div>
  );
}

export default App;
