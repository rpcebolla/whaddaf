import React from "react";

export default function Pokemona(props) {
  return (
    <div>
      <h2>Pokemona name: {props.name} </h2>
      <p>Weight: {props.weight} kg</p>
      <p>Awesome: {props.awesome ? "YES!" : "nope, not really"}</p>
      <p>Terrifying: {props.terrifying ? "Very!" : "nah, cutie pie"}</p>
      <p>Abilities: {props.abilities}</p>
    </div>
  );
}
