import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import Counter from './Counter';
import ProfileViewer from './ProfileViewer';
import ProfileViewerWithSearch from './ProfileViewWithSearch';
import Video from './Video';
import Focuser from './Focuser';
import Timer2 from './Timer2';

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Timer /> */}
      <ProfileViewer name='Colt' color='teal' />
      <ProfileViewer name='elie' color='orange' />
      <ProfileViewerWithSearch />
      <Video />
      <Focuser />
      <Timer2 />
    </div>
  );
}

export default App;
