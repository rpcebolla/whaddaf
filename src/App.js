import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title.js";

function App() {
  return (
    <div className="App">
      <main>
        <Title />
      </main>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I'm not highly confident about this. Yet.</p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          I can show you the world!
        </a>
      </header>
    </div>
  );
}

export default App;
