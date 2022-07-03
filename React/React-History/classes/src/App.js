import React from 'react';
import './App.css';
import Counter from './Counter';
import CounterClassBasedNewer from './CounterClassBasedNewer';

function App() {
  return (
    <div className="App">
      <Counter color='teal' initialVal={10} />
      <Counter initialVal={10} />
      {/* <CounterClassBasedNewer /> */}
    </div>
  );
}

export default App;
