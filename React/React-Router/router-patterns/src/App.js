import React from 'react';
import './App.css';
import {BrowserRouter, Route, useParams} from 'react-router-dom'
import Nav from './Nav';
import Food from './Food';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      
        {/* <Nav />
        <Route path="/food/:name">
          <Food />
      </Route> */}
        <Nav />
        <Routes />
      
    </div>
  );
}

export default App;
