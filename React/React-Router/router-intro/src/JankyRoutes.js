// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

// import Home from './Home';
// import Eat from './Eat';
// import Drink from './Drink';

// function App() {

//   const [page, setPage] = useState('home');
  
//   const showPage = () => {
//     if (page === 'home') {
//       return <Home />
//     }
//     if (page === 'drink') {
//       return <Drink />
//     }
//     if (page === 'eat') {
//       return <Eat />
//     }
//   }
//   return (
//     <main className='App'>
//       <nav>
//         <a onClick={() => setPage('home')}>Home</a>
//         <a onClick={() => setPage('eat')}>Eat</a>
//         <a onClick={() => setPage('drink')}>Drink</a>
//       </nav>
//       {showPage()} 

//    </main>
//   );
// }

// export default App;