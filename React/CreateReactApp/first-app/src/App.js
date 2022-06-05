import React from 'react';
import items from './items'
import ShoppingCart from './ShoppingCart';
// import logo from './logo.svg';
// import { add, multiply } from './helpers.js';
// import cats, { meow } from './cats';
import './App.css';


function App() {
  return (
      <ShoppingCart items={items}/>
 )
}

export default App;
