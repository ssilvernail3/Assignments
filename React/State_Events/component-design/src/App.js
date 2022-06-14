import logo from './logo.svg';
import Dice from './Dice';
import ColoredCirles from './ColoredCircles/ColoredCircles'
import './App.css';

function App() {
  return (
    <div className="App">
      <ColoredCirles />
      {/* <Dice numDice={4} mavVal={20} title='Roll me!' />
      <Dice /> */}
    </div>
  );
}

export default App;
