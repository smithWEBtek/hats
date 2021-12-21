import hat from './hat.svg';
import highway from './highway.svg';
import Memo from './components/Memo/Memo';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={highway} className="App-highway" alt="highway" />
      <img src={hat} className="App-hat" alt="hat" />
      <h1 className="tagline">
          Hats found on the side of the road (dot com)
      </h1>
      <Memo />
    </div>
  );
}

export default App;
