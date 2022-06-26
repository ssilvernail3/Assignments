import logo from './logo.svg';
import './App.css';
import MoodClicker from './MoodClicker';
import Counter from './Counter';
import ColorPicker from './ColorPicker';
import SignUpForm from './SignUpForm';



function App() {
  return (
    <div className="App">
      <SignUpForm />
      <ColorPicker />
      <Counter />
      <MoodClicker />
    </div>
  );
}

export default App;
