import logo from "./logo.svg";
import "./App.css";
import {
  sum,
  ComponentA,
  ComponentB,
  ComponentHook,
} from "@project/core-components";
import * as a from "@project/core-components";
console.log(a);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <ComponentA text="Toan" />
        <ComponentB text="Toan" /> */}
        {/* <ComponentHook /> */}
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
