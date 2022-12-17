import React from "react";
import "./styleCard.css";

function Card(props) {
 

  return (
    <>
      <div className="card" style={{borderColor: props.pokemonCard.color1}}  >
        <p className="numero" style={{color: props.pokemonCard.color1}}> #{props.pokemonCard.numero}  </p>
        <img className="imagenCard" src={props.pokemonCard.imagen} alt="" />
        <h2 className="nombreCard" style={{backgroundColor: props.pokemonCard.color1}} > {props.pokemonCard.nombre} </h2>
      </div>
    </>
  );
}

export default Card;
