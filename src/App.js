import Formulario from "./componentes/Formulario";
import Listado from "./componentes/Listado";
import Total from "./componentes/Total";
import PeliContext from "./contextos/PeliContext";
/* import peliculas from "peliculas.json";
import { useState } from "react"; */
// he intentado traerme el json para hacer pruebas peron se me ha acabado el tiempo


// cada pelicula es un objeto con las propiedades Title, Year, imdbID, Type y Poster


//el buscador de nombre debe apuntara la propiedad Title.

function App() {
  /*   const [pelicula, setPelicula] = useState = (""); */
  return (
    <>
      <PeliContext.Provider >
        <div className="container">
          <header className="cabecera row">
            <h1 className="col">Mis series</h1>
          </header>
          <Formulario />
          <section className="listado">
            <Total />
            <Listado />
          </section>
        </div>
      </PeliContext.Provider>
    </>
  );
}

export default App;
