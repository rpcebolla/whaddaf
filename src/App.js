import React from "react";
import "./App.css";
import Title from "./components/Title.js";
import Pokemona from "./components/Pokemona.js";

const all_pokemona = [
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
        <div className="row">
          {all_pokemona.map((pokemona) => {
            return (
              <div className="col-md-6 col-lg-4">
                <Pokemona
                  name={pokemona.name}
                  weight={pokemona.weight}
                  awesome={pokemona.awesome}
                  terrifying={pokemona.terrifying}
                  abilities={pokemona.abilities}
                />
              </div>
            );
          })}
        </div>
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
