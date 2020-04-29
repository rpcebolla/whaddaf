import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title.js";
import Pokemona from "./components/Pokemona.js";

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Title of your Web Tape" />
      </main>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Pokemona />
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
