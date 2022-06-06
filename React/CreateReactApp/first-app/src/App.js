import React from 'react';
import items from './items'
import moreItems from './moreitems';
import ShoppingCart from './ShoppingCart';
import fakeLogo from './fakeLogo.svg';
import Alert from './Alert';

// import logo from './logo.svg';
// import { add, multiply } from './helpers.js';
// import cats, { meow } from './cats';
import './App.css';


function App() {
  
  return (
    <div>
      <Alert variant='success'>
        <h1>Welcome Back!</h1>
      </Alert>
      <Alert variant='danger'>
        <h1>Oh No!</h1>
      </Alert>
      <img src={fakeLogo} id='logo' alt=''/>
      <ShoppingCart items={items} username="Carly"/>
      <ShoppingCart items={moreItems} username="Rusty" />
    </div>
 )
}

export default App;
