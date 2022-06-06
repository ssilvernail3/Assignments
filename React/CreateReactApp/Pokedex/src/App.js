import React from 'react';
import logo from './logo.svg';
import Pokedex from './Pokedex';
import Pokemon from './Pokemon';
import Pokecard from './Pokecard';
import './App.css';

function App() {
  return (
  
    <div>
      <Pokedex Pokemon={Pokemon} />
    </div>
  
  );
}

export default App;

ReactDOM.render(<App/>,
  document.getElementById("root"));