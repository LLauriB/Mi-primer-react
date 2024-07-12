import './App.css';
import Lista from './lista';

function App() {
  return(
      <div className="App">
        <h1>Hello Dojo!</h1>
        <h2>Things I need to do:</h2>

        <header className="App-header">
            <Lista/>
        </header>
      </div>
  );
}

export default App;
