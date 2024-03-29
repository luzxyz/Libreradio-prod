import { useState } from "preact/hooks";
import PirePer from "./PirePer.tsx";

export default function Bandas() {
    const [listaBandas, setLBandas] = useState([]);

    const agregarBanda = () => {
        setLBandas(listaBandas.concat(
                        <PirePer potencia={0} atenuacion={0}
                                 gananciaIsotropa={0} gananciaReal={0}
                                 index={listaBandas.length} nombre={"NombreAntena"} />
                    ));
    };

    const eliminarBanda = () => {
        setLBandas(listaBandas.filter((_, i: number) => i !== listaBandas.length-1));
    }

    return (
        <div class="inputs">
        <h2>Datos configuración de antenas</h2>
        <div class="content">
            <div class="bandas-container">
            {listaBandas.map((bnd) => bnd)}
            </div>
            <div class="buttons-container">
                <button onClick={agregarBanda} ><img src="/add.svg" alt="Agregar" width="70"/></button>
                <button onClick={eliminarBanda}><img src="/remove.svg" alt="Remover" width="70"/></button>
            </div>
        </div>
        </div>
           );
}
