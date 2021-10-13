import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  sum,
  ComponentA,
  ComponentB,
  ComponentHook,
} from "@project/core-components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <ComponentA text="Toan" />
        <ComponentB text="Toan" />
        <ComponentHook />
        <button className="App-link" onClick={() => console.log(sum(1, 2))}>
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
