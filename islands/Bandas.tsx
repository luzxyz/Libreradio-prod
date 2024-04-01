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
                         OcElim={dato.OcElim} OcHlim={dato.OcHlim} OcSlim={dato.OcSlim}
                         OcERMS={dato.OcERMS} OcHRMS={dato.OcHRMS} OcSRMS={dato.OcSRMS}
                         OcEinc={dato.OcEinc} OcHinc={dato.OcHinc} OcSinc={dato.OcSinc}
                         PobElim={dato.PobElim} PobHlim={dato.PobHlim} PobSlim={dato.PobSlim}
                         PobERMS={dato.PobERMS} PobHRMS={dato.PobHRMS} PobSRMS={dato.PobSRMS}
                         PobEinc={dato.PobEinc} PobHinc={dato.PobHinc} PobSinc={dato.PobSinc}
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
                    frecuencia: 0,
                    nombre: "",
                    OcEinc: 0,
                    OcHinc: 0,
                    OcSinc: 0,
                    OcElim: 0,
                    OcHlim: 0,
                    OcSlim: 0,
                    OcERMS: 0,
                    OcHRMS: 0,
                    OcSRMS: 0,
                    PobEinc: 0,
                    PobHinc: 0,
                    PobSinc: 0,
                    PobElim: 0,
                    PobHlim: 0,
                    PobSlim: 0,
                    PobERMS: 0,
                    PobHRMS: 0,
                    PobSRMS: 0,
                    pire: 0,
                    per: 0
                });

        setLBandas(listaBandas.concat(
                        <PirePer index={listaBandas.length}
                                 potencia={0} atenuacion={0}
                                 gananciaIsotropa={0}
                                 gananciaReal={0}
                                 nombre={""}
                                 frecuencia={0}
                                 OcEinc={0} OcHinc={0} OcSinc={0}
                                 OcElim={0} OcHlim={0} OcSlim={0}
                                 OcERMS={0} OcHRMS={0} OcSRMS={0}
                                 PobEinc={0} PobHinc={0} PobSinc={0}
                                 PobElim={0} PobHlim={0} PobSlim={0}
                                 PobERMS={0} PobHRMS={0} PobSRMS={0}
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
