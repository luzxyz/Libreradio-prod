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

	      OcEinc={dato.OcEinc}
	      OcHinc={dato.OcHinc}
	      OcSinc={dato.OcSinc}

	      PobEinc={dato.PobEinc}
	      PobHinc={dato.PobHinc}
	      PobSinc={dato.PobSinc}

	      pire={dato.pire}
	      per={dato.per}
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
    const [listaEvaluacion, setLEvaluacion] = useState(0);

    return (
	    <div>
                {listaContenido.map((bnd: any) => bnd)}
	    </div>
          );
}
