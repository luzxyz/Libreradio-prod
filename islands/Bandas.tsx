import { useState } from "preact/hooks";
import { listaDatos, leerLocalStorage } from "../utils/datos.ts";
import PirePer from "./PirePer.tsx";

export default function Bandas() {

    const loadLocalStorageData = () => {
        if ( localStorage.getItem("LSlistaDatos") !== null ) {
            leerLocalStorage();
            let PPListaDatos = [...listaDatos.value];
            PPListaDatos = PPListaDatos.map( (dato) =>
             <PirePer index={dato.index}
                         potencia={dato.potencia} atenuacion={dato.atenuacion}
                         gananciaIsotropa={dato.gananciaIsotropa}
                         gananciaReal={dato.gananciaReal}
                         nombre={dato.nombre}
                         frecuencia={dato.frecuencia}
                         Elim={dato.Elim} Hlim={dato.Hlim} Slim={dato.Slim}
                         ERMS={dato.ERMS} HRMS={dato.HRMS} SRMS={dato.SRMS}
                         Einc={dato.Einc} Hinc={dato.Hinc} Sinc={dato.Sinc}
                         />);
            return PPListaDatos;
        } else { return []; }
        
    }
    const [listaBandas, setLBandas] = useState(loadLocalStorageData);

    const agregarBanda = () => {
        listaDatos.value.push({
                    index: 0,
                    potencia: 0,
                    atenuacion: 0,
                    gananciaIsotropa: 0,
                    gananciaReal: 0,
                    nombre: "",
                    frecuencia: 0,

                    Einc: 0,
                    Hinc: 0,
                    Sinc: 0,

                    Elim: 0,
                    Hlim: 0,
                    Slim: 0,
                    ERMS: 0,
                    HRMS: 0,
                    SRMS: 0,

                    pire: 0,
                    per: 0,
                    ER: 0
                });

        setLBandas(listaBandas.concat(
                        <PirePer index={listaBandas.length}
                                 potencia={0} atenuacion={0}
                                 gananciaIsotropa={0}
                                 gananciaReal={0}
                                 nombre={""}
                                 frecuencia={0}
                                 Einc={0} Hinc={0} Sinc={0}
                                 Elim={0} Hlim={0} Slim={0}
                                 ERMS={0} HRMS={0} SRMS={0}
                                 />
                    ));
    };

    const eliminarBanda = () => {
        listaDatos.value.pop();
        setLBandas(listaBandas.filter((_, i: number) => i !== listaBandas.length-1));
        localStorage.setItem("LSlistaDatos",JSON.stringify(listaDatos.value));
    };


    return (
        <div class="inputs">
        <h2>Datos configuración de antenas</h2>
        <p>Nota: Todos los datos pedidos deben ser diligenciados en lo posible.</p>
        <p>Coloca cero (0) cuando no se haya medido.</p>
        <div class="content">
            <div class="bandas-container">
                {listaBandas.map((bnd: any) => bnd)}
            </div>
            <div class="buttons-container">
                <button onClick={agregarBanda} ><img src="/add.svg" alt="Agregar" width="70"/></button>
                <button onClick={eliminarBanda}><img src="/remove.svg" alt="Remover" width="70"/></button>
            </div>
        </div>
        </div>
           );
}
