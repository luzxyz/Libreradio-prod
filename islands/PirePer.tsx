import { Datos, datos, ER } from "../utils/datos.ts";

export default function PirePer() {

    return (
        <div class="pireper-container">
            <p><strong>Transmisor <dfn>{datos.nombre.value}</dfn></strong></p>
            <p>Alias transmisor</p>
            <input value={datos.nombre.value} type="text" maxlength="20" onInput={(e) => datos.nombre.value = e.currentTarget.value}/>
            <p>PIRE (db)</p>
            <input value={datos.pire.value} type="number" min="0" onInput={(e) => datos.pire.value = +e.currentTarget.value}/>
            <p>PER (db)</p>
            <input value={datos.per.value} type="number" max="0" onInput={(e) => datos.per.value = +e.currentTarget.value} />
            <p>Frecuencia (Mhz)</p>
            <input value={datos.frecuencia.value} type="number" min="0" onInput={(e) => datos.frecuencia.value = +e.currentTarget.value}/>


           <div class="extras-1">
                <p><strong>Datos medidos en campo</strong></p>
                <div class="extras-data">
                    <div class="extras-input">
                        <p>Intensidad Campo Electrico incidente (V/m)</p>
                        <input value={datos.Einc.value} type="number" min="0" onInput={(e) => datos.Einc.value = +e.currentTarget.value}/>
                    </div>
                    <div class="extras-input">
                        <p>Intensidad Campo Magnetico incidente (A/m)</p>
                        <input value={datos.Hinc.value} type="number" min="0" onInput={(e) => datos.Hinc.value = +e.currentTarget.value}/>
                    </div>
                    <div class="extras-input">
                        <p>Densidad de potencia incidente (W/m)</p>
                        <input value={datos.Sinc.value} type="number" min="0" onInput={(e) => datos.Sinc.value = +e.currentTarget.value}/>
                    </div>
                    <div class="extras-input">
                        <p>Limite Campo Electrico (V/m)</p>
                        <input type="number" min="0" value={datos.Elim.value} onInput={(e) => datos.Elim.value = +e.currentTarget.value}/>
                    </div>
                    <div class="extras-input">
                        <p>Limite Campo Magnetico (A/m)</p>
                        <input type="number" min="0" value={datos.Hlim.value} onInput={(e) => datos.Hlim.value = +e.currentTarget.value}/>
                    </div>
                    <div class="extras-input">
                        <p>Limite Densidad Potencia (W/m)</p>
                        <input type="number" min="0" value={datos.Slim.value} onInput={(e) => datos.Slim.value = +e.currentTarget.value}/>
                    </div>
                    <div class="extras-input">
                        <p>Campo Electrico - RMS (V/m)</p>
                        <input type="number" min="0" value={datos.ERMS.value} onInput={(e) => datos.ERMS.value = +e.currentTarget.value}/>
                    </div>
                    <div class="extras-input">
                        <p>Campo Magnetico - RMS (A/m)</p>
                        <input type="number" min="0" value={datos.HRMS.value} onInput={(e) => datos.HRMS.value = +e.currentTarget.value}/>
                    </div>
                    <div class="extras-input">
                        <p>Densidad Potencia - RMS (W/m)</p>
                        <input type="number" min="0" value={datos.SRMS.value} onInput={(e) => datos.SRMS.value = +e.currentTarget.value}/>
                    </div>
                </div>
           </div>
           <div class="results">
                <p><span>ER: </span>{ER}</p>
           </div>
    </div>);
}
