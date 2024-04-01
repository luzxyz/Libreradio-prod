import Informacion from "../components/showInfo.tsx";
import { useState } from "preact/hooks";
import { listaDatos, leerLocalStorage } from "../utils/datos.ts";

function darInformacion(){
    let componentes = [...listaDatos.value];
    componentes = componentes.map((dato)=>
         <Informacion
	      index={dato.index}
	      potencia={dato.potencia}
	      atenuacion={dato.atenuacion}
	      gananciaIsotropa={dato.gananciaIsotropa}
	      gananciaReal={dato.gananciaReal}
	      nombre={dato.nombre}
	      frecuencia={dato.frecuencia}

	      Einc={dato.Einc}
	      Hinc={dato.Hinc}
	      Sinc={dato.Sinc}

          Elim={dato.Elim}
          Hlim={dato.Hlim}
          Slim={dato.Slim}

          ERMS={dato.ERMS}
          HRMS={dato.HRMS}
          SRMS={dato.SRMS}

	      pire={dato.pire}
	      per={dato.per}

          ER={dato.ER}
	 />);
    return componentes;
}

export default function Results() {

    const loadLocalStorageData = () => {
	    if ( localStorage.getItem("LSlistaDatos") == null ) {
		return [<p class="results-nodata">No se tienen datos en el registro.</p>]
	    }
	    leerLocalStorage();
	    return darInformacion(); 
    }

    const [listaContenido, setLContenido] = useState(loadLocalStorageData);

    if (listaContenido.length == 0){
		return <p class="results-nodata">No se tienen datos en el registro.</p>;
    }

    return (
	    <div>
                {listaContenido.map((bnd: any) => bnd)}
	    </div>
          );
}
