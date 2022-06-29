import React from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Eat from './Eat';
import Drink from './Drink';
import NavBar from './NavBar';

function App() {

  
  return (
    <main className='App'>
      <BrowserRouter>
        <NavBar />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/eat'>
          <Eat />
        </Route>
        <Route exact path='/drink'>
          <Drink />
        </Route>
      </BrowserRouter>

   </main>
  );
}

export default App;
