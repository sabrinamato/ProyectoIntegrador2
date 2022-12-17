import React from "react";
import Card from "../Card/Card";
import pokemons from "../../API/Data";
import "./styleMain.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Heder from "../Heder/Heder";

function Main(props) {
  const [buscar, setBuscar] = useState("");
  const [ordenarLetra, setOrdenarLetra]= useState(false);
 
  const clikOrdenar = (ordenar) => {
    setOrdenarLetra(ordenar);
  };
console.log(ordenarLetra)
  return (
    <div className="main">
      <Heder clikOrdenar={clikOrdenar}/>
      <input
        type="text"
        placeholder="Procurar"
        onChange={(event) => {
          setBuscar(event.target.value);
        }}
      />
      <div className="contenedorCard">
        {pokemons
          .filter((val) => {
            if (buscar == "") {
              return val;
            } else if (
              val.nombre.toLowerCase().includes(buscar.toLowerCase())
            ) {
              return val;
            }
          })
          .map((pokemon) => {
            return (
              <div key={pokemon.id}>
                <Link to={`pokemon/${pokemon.id}`}>
                  <Card pokemonCard={pokemon} />
                </Link>
              </div>
            );
          })}
      </div> 
      {ordenarLetra ?
        pokemons.sort((a, b) => {
          if (a.nombre < b.nombre) {
            return -1;
          } else if (a.nombre > b.nombre) {
            return 1;
          } else {
            return 0;
          }
        }).map((pokemon) => {
            return (
              <div key={pokemon.id}>
              </div>
            )
        }) : 
        pokemons.sort((a, b) => {
          if (a.id < b.id) {
            return -1;
          } else if (a.id > b.id) {
            return 1;
          } else {
            return 0;
          }
        }).map((pokemon) => {
            return (
              <div key={pokemon.id}>
              </div>
            );
        })  
        }

    </div>
  );
}

export default Main;
