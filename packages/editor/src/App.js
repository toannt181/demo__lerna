import logo from "./logo.svg";
import "./App.css";
import { sum, ComponentA } from "@project/core-components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ComponentA text="Toan" />
        <button
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => console.log(sum(1, 2))}
        >
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
