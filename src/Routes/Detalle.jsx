import pokemons from "../API/Data";
import { Link, useParams } from "react-router-dom";
import Barra from "../Components/Barra/Barra";
import "./detalle.css";

function Modal() {
  const { idPokemon } = useParams();

  const pokemon = pokemons.filter((pokemon) => {
    return pokemon.id == idPokemon;
  });

  return (
    <>
      <div
        className="contenedorDetalle"
        style={{ backgroundColor: pokemon[0].color1 }}
      >
        <img src="/Recursos/Pokeball.png" alt="" className="pokeball" />
        <div className="encabezadoDetalle">
          <div className="logoArrow">
            <Link to={"/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#FFFFF"
                  d="m12.23 20.512.774-.774a.469.469 0 0 0 0-.663l-6.06-6.06h13.337c.26 0 .469-.21.469-.468v-1.094a.469.469 0 0 0-.469-.469H6.944l6.06-6.06a.469.469 0 0 0 0-.662l-.774-.774a.469.469 0 0 0-.662 0l-8.18 8.18a.469.469 0 0 0 0 .664l8.18 8.18c.183.183.48.183.662 0Z"
                />
              </svg>{" "}
            </Link>
          </div>
          <div className="divNombre">
            <h1 className="nombreDetalle">{pokemon[0].nombre} </h1>
          </div>
          <div className="divNumero">
            <h3 className="numeroDetalle"> # {pokemon[0].numero}</h3>
          </div>
        </div>
        {idPokemon !== "1" && (
          <Link to={`/pokemon/${parseInt(idPokemon) - 1}`} replace>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="16"
              fill="none"
              viewBox="0 0 8 16"
              className="anterior"
            >
              <path
                fill="#FFFF"
                d="m.772 1.19-.619.62a.375.375 0 0 0 0 .53L5.8 8 .153 13.66a.375.375 0 0 0 0 .53l.619.62a.375.375 0 0 0 .53 0l6.545-6.545a.375.375 0 0 0 0-.53L1.302 1.19a.375.375 0 0 0-.53 0Z"
              />
            </svg>
          </Link>
        )}
        {idPokemon !== "9" && (
          <Link to={`/pokemon/${parseInt(idPokemon) + 1}`} replace>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="16"
              fill="none"
              viewBox="0 0 8 16"
              className="siguiente"
            >
              <path
                fill="#FFFF"
                d="m.772 1.19-.619.62a.375.375 0 0 0 0 .53L5.8 8 .153 13.66a.375.375 0 0 0 0 .53l.619.62a.375.375 0 0 0 .53 0l6.545-6.545a.375.375 0 0 0 0-.53L1.302 1.19a.375.375 0 0 0-.53 0Z"
              />
            </svg>
          </Link>
        )}

        <img src={pokemon[0].imagen} alt="" className="fotoDetalle" />
        <div className="contenedorInfo">
          <div className="infoModal">
            <div className="tipoPokemon">
              <p
                className="etiqueta"
                style={{ backgroundColor: pokemon[0].color1 }}
              >
                {pokemon[0].tipo1}
              </p>
              {pokemon[0].tipo2 !== "" && (
                <p
                  className="etiqueta"
                  style={{ backgroundColor: pokemon[0].color2 }}
                >
                  {pokemon[0].tipo2}
                </p>
              )}
            </div>
            <h2 className="subtitulo" style={{ color: pokemon[0].color1 }}>
              About
            </h2>
            <div className="caracteristicas">
              <section className="sectCaract">
                <div className="bloquePeso">
                  <div className="peso">
                    <img
                      className="iconoDetalle"
                      src="/Recursos/Weight.svg"
                      alt=""
                    />
                    <h4>{pokemon[0].peso}</h4>
                  </div>
                  <p className="pCaracteristicas">Weight</p>
                </div>
              </section>
              <section className="sectCaract">
                <div className="bloqueAltura">
                  <div className="altura">
                    <img
                      className="iconoDetalle"
                      src="/Recursos/Height.svg"
                      alt=""
                    />
                    <h4>{pokemon[0].altura}</h4>
                  </div>
                  <p className="pCaracteristicas">Height</p>
                </div>
              </section>
              <section className="sectCaract">
                <div className="bloqueMovimientos">
                  <div className="movimientos">
                    <h4>{pokemon[0].moves[0]}</h4>
                    {pokemon[0].moves[1] !== "" && (
                      <h4>{pokemon[0].moves[1]}</h4>
                    )}
                  </div>
                  <p className="pCaracteristicas"> Moves</p>
                </div>
              </section>
            </div>
            <div className="descripcionDetalle">
              <p>{pokemon[0].descripcion}</p>
            </div>
            <h2 className="subtitulo" style={{ color: pokemon[0].color1 }}>
              Base Stats
            </h2>
            <div className="baseStats">
              <div className="estadistica" style={{ color: pokemon[0].color1 }}>
                <p>HP</p>
                <p>ATK</p>
                <p>DEF</p>
                <p>STAK</p>
                <p>SDEF</p>
                <p>SPD</p>
              </div>
              <div className="valor">
                <p>{pokemon[0].baseStats.hp}</p>
                <p>{pokemon[0].baseStats.atk}</p>
                <p>{pokemon[0].baseStats.def}</p>
                <p>{pokemon[0].baseStats.satk}</p>
                <p>{pokemon[0].baseStats.sdef}</p>
                <p>{pokemon[0].baseStats.spd}</p>
              </div>
              <div className="barra">
                <Barra
                  bgcolor={pokemon[0].color1}
                  progress={pokemon[0].baseStats.hp}
                  className="barraEstadistica"
                />
                <Barra
                  bgcolor={pokemon[0].color1}
                  progress={pokemon[0].baseStats.atk}
                  className="barraEstadistica"
                />
                <Barra
                  bgcolor={pokemon[0].color1}
                  progress={pokemon[0].baseStats.def}
                  className="barraEstadistica"
                />
                <Barra
                  bgcolor={pokemon[0].color1}
                  progress={pokemon[0].baseStats.satk}
                  className="barraEstadistica"
                />
                <Barra
                  bgcolor={pokemon[0].color1}
                  progress={pokemon[0].baseStats.sdef}
                  className="barraEstadistica"
                />
                <Barra
                  bgcolor={pokemon[0].color1}
                  progress={pokemon[0].baseStats.spd}
                  className="barraEstadistica"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
