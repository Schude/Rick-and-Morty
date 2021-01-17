import React from "react";

export default function Characterdetail({character}) {
  return (
    <div>
      <h1>Rick And Morty</h1>

      <br></br>
      <h2>{character.name} </h2>
      <figure>
        <img src={character.image} alt={character.name}></img>
      </figure>
      <div>Species: {character.species} </div>
      <div>Status: {character.status} </div>
      <div>Gender: {character.gender} </div>
      <div>Origin: {character.origin.name} </div>

      <div>Location:{character.location.name} </div>
      <div>Type:{character.type} </div>
      <div>Created:{character.created} </div>
    </div>
  );
}
