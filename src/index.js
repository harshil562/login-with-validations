import React from "react";
import ReactDOM from "react-dom";

import Login from "./Login";
import "./index.css";
import logo from './assets/healthifyme.png'

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <h3>Sign In</h3>
      <p>Use your Healthifyme Account.</p>
      <Login />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
