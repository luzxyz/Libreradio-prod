import { listaDatos, leerLocalStorage } from "../utils/datos.ts";
import {  }

function evaluacion(){

}

function Contenido() {
    leerLocalStorage();
    if (listaDatos.value.length == 0) {
        return <p class="results-nodata">No se tienen datos en el registro.</p>
    }
    return <p>Contenido!</p>
}

export default function Results(){
    return (
            <Contenido />
          );
}
