import { Datos, datos, ER } from "../utils/datos.ts";

export default function Transmisor() {

    return (
        <div class="pireper-container">
           <div class="extras">
                <h2><strong>Transmisor <dfn>{datos.nombre.value}</dfn></strong></h2>
                <p><strong>Datos basicos</strong></p>
                <p>Responsable de hacer las mediciones</p>
                <input value={datos.cert_nombre.value} type="text" maxlength="40" onInput={(e) => datos.cert_nombre.value = e.currentTarget.value}/>
                <p>Contacto responsable.(email, web site...)</p>
                <input value={datos.cert_contacto.value} type="text" maxlength="40" onInput={(e) => datos.cert_contacto.value = e.currentTarget.value}/>
                <p>Alias transmisor</p>
                <input value={datos.nombre.value} type="text" maxlength="20" onInput={(e) => datos.nombre.value = e.currentTarget.value}/>
                <p>PIRE (W)</p>
                <input value={datos.pire.value} type="number" min="0" onInput={(e) => datos.pire.value = +e.currentTarget.value}/>
                <p>PER (W)</p>
                <input value={datos.per.value} type="number" max="0" onInput={(e) => datos.per.value = +e.currentTarget.value} />
                <p>Frecuencia (Mhz)</p>
                <input value={datos.frecuencia.value} type="number" min="0" onInput={(e) => datos.frecuencia.value = +e.currentTarget.value}/>

                <div class="extras-data">
                    <p><strong>Datos limites maximos de exposicion</strong></p>
                    <p><strong>Zona Poblacion General</strong></p>
                    <div class="extras-input">
                        <p>Intensidad Campo Electrico incidente (V/m)</p>
                        <input value={datos.Einc_p.value} type="number" min="0" onInput={(e) => datos.Einc_p.value = +e.currentTarget.value}/>
                    </div>
                    <div class="extras-input">
                        <p>Intensidad Campo Magnetico incidente (A/m)</p>
                        <input value={datos.Hinc_p.value} type="number" min="0" onInput={(e) => datos.Hinc_p.value = +e.currentTarget.value}/>
                    </div>
                    <div class="extras-input">
                        <p>Densidad de potencia incidente (W/m)</p>
                        <input value={datos.Sinc_p.value} type="number" min="0" onInput={(e) => datos.Sinc_p.value = +e.currentTarget.value}/>
                    </div>
                    <p><strong>Zona Ocupacional</strong></p>
                    <div class="extras-input">
                        <p>Intensidad Campo Electrico incidente (V/m)</p>
                        <input value={datos.Einc_o.value} type="number" min="0" onInput={(e) => datos.Einc_o.value = +e.currentTarget.value}/>
                    </div>
                    <div class="extras-input">
                        <p>Intensidad Campo Magnetico incidente (A/m)</p>
                        <input value={datos.Hinc_o.value} type="number" min="0" onInput={(e) => datos.Hinc_o.value = +e.currentTarget.value}/>
                    </div>
                    <div class="extras-input">
                        <p>Densidad de potencia incidente (W/m)</p>
                        <input value={datos.Sinc_o.value} type="number" min="0" onInput={(e) => datos.Sinc_o.value = +e.currentTarget.value}/>
                    </div>
                </div>
           </div>
           <div className="extras">
               <p><strong>Datos Evaluacion Simplificada</strong></p>
               <img src="medAyuda1.png" alt="Vease Figura 3" width="250" />
               <p><strong>Zona poblacional</strong></p>
               <div class="extras-input">
                   <p>Dato "a" (metros)</p>
                   <input value={datos.EvSimp_a_p.value} type="number" min="0" onInput={(e) => datos.EvSimp_a_p.value = +e.currentTarget.value}/>
               </div>
               <div class="extras-input">
                   <p>Dato "r" (metros)</p>
                   <input value={datos.EvSimp_r_p.value} type="number" min="0" onInput={(e) => datos.EvSimp_r_p.value = +e.currentTarget.value}/>
               </div>
               <p><strong>Zona ocupacional</strong></p>
               <div class="extras-input">
                   <p>Dato "a" (metros)</p>
                   <input value={datos.EvSimp_a_o.value} type="number" min="0" onInput={(e) => datos.EvSimp_a_o.value = +e.currentTarget.value}/>
               </div>
               <div class="extras-input">
                   <p>Dato "r" (metros)</p>
                   <input value={datos.EvSimp_r_o.value} type="number" min="0" onInput={(e) => datos.EvSimp_r_o.value = +e.currentTarget.value}/>
               </div>
           </div>
    </div>);
}
