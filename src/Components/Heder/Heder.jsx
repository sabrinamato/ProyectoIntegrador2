import React from "react";
import { useState } from "react";
import "../Heder/styleHeder.css";

function Heder(props) {
  const [estadoOrdenar, setEstadoOrdenar] = useState(false);

  function funcionOrdenar() {
    if (estadoOrdenar == false) {
      setEstadoOrdenar(true);
      props.clikOrdenar(true);
    } else {
      setEstadoOrdenar(false);
      props.clikOrdenar(false);
    }
  }
  console.log(estadoOrdenar);
  return (
    <div className="heder">
      <img src="/Recursos/Pokeball.png" alt="logoPoke" />
      <h1>Pokédex</h1>
      <div className="ordenar" onClick={funcionOrdenar}>
        <div>
          {estadoOrdenar ? (
            <p className="ordenarLetra">
              A <br /> Z 
            </p>
          ) : (
            <p>#</p>
          )}
        </div>
          <img src="/Recursos/Arrow.svg" alt="" className="flechaOrdenar" />
      </div>
    </div>
  );
}

export default Heder;
