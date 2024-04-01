import { useSignal,useComputed } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { listaDatos } from "../utils/datos.ts";

interface pirePer {
    index: number;
    potencia : number;
    atenuacion : number;
    gananciaIsotropa : number;
    gananciaReal : number;
    nombre : string;
    frecuencia : number;

    Einc: number;
    Hinc: number;
    Sinc: number;

    Elim: number;
    Hlim: number;
    Slim: number;
    ERMS: number;
    HRMS: number;
    SRMS: number;

}

export default function PirePer(props: pirePer) {
    const potencia = useSignal(props.potencia);
    const atenuacion = useSignal(props.atenuacion);
    const gananciaIsotropa = useSignal(props.gananciaIsotropa);
    const gananciaReal = useSignal(props.gananciaReal);
    const nombre = useSignal(props.nombre);
    const frecuencia = useSignal(props.frecuencia);
    const Elim = useSignal(props.Elim);
    const Hlim = useSignal(props.Hlim);
    const Slim = useSignal(props.Slim);
    const ERMS = useSignal(props.ERMS);
    const HRMS = useSignal(props.HRMS);
    const SRMS = useSignal(props.SRMS);

    const Einc= useSignal(props.Einc);
    const Hinc= useSignal(props.Hinc);
    const Sinc= useSignal(props.Sinc);

    const pire = useComputed(() => potencia.value+atenuacion.value+
                                   gananciaIsotropa.value);
    const per = useComputed(() => potencia.value+atenuacion.value+
                                   gananciaReal.value);
    const ER = useComputed(()=> {
                                    const num = Math.max(Math.pow(ERMS.value/Elim.value,2),Math.pow(HRMS.value/Hlim.value,2));
                                    return Math.round((num + Number.EPSILON) * 100) / 100;
                                    });

    useEffect(() => {
        const newDatos = {
            potencia: potencia.value,
            atenuacion: atenuacion.value,
            gananciaIsotropa: gananciaIsotropa.value,
            gananciaReal: gananciaReal.value,
            frecuencia: frecuencia.value,
            index: props.index,
            nombre: nombre.value,
            Einc: Einc.value,
            Hinc: Hinc.value,
            Sinc: Sinc.value,
            Elim: Elim.value,
            Hlim: Hlim.value,
            Slim: Slim.value,
            ERMS: ERMS.value,
            HRMS: HRMS.value,
            SRMS: SRMS.value,
            pire: pire.value,
            per: per.value,
            ER: ER.value,
        }
        
        listaDatos.value.splice(props.index,1,newDatos);

        localStorage.setItem("LSlistaDatos",JSON.stringify(listaDatos.value));

      }, [potencia.value, atenuacion.value, gananciaIsotropa.value,
          gananciaReal.value, nombre.value, frecuencia.value,
          Einc.value, Hinc.value, Sinc.value,
          Elim.value, Hlim.value, Slim.value,
          ERMS.value, HRMS.value, SRMS.value,
          pire, per, ER]);

    return (
        <div class="pireper-container">
            <p><strong>Banda {props.index+1} </strong></p>
            <p><dfn>{nombre.value}</dfn></p>
            <p>Alias Antena</p>
            <input value={nombre.value} type="text" maxlength="20" onInput={(e) => nombre.value = e.currentTarget.value}/>
            <p>Potencia(db)</p>
            <input value={potencia.value} type="number" min="0" onInput={(e) => potencia.value = +e.currentTarget.value}/>
            <p>Atenuacion(db)</p>
            <input value={atenuacion.value} type="number" max="0" onInput={(e) => atenuacion.value = +e.currentTarget.value} />
            <p>Ganancia Isotropa de la Antena(db)</p>
            <input value={gananciaIsotropa.value} type="number" min="0" onInput={(e) => gananciaIsotropa.value = +e.currentTarget.value}/>
            <p>Ganancia Real de la Antena(db)</p>
            <input value={gananciaReal.value} type="number" min="0" onInput={(e) => gananciaReal.value = +e.currentTarget.value}/>
            <p>Frecuencia (Mhz)</p>
            <input value={frecuencia.value} type="number" min="0" onInput={(e) => frecuencia.value = +e.currentTarget.value}/>

           <div class="results">
                <p><span>PIRE(db): </span> {pire}</p>
                <p><span>PER(db): </span> {per}</p>
                <p><span>ER: </span> {ER}</p>
           </div>
           <div class="extras-1">
                <p><strong>Datos medidos en campo</strong></p>
                <div class="extras-data">
                    <div class="extras-input">
                        <p>Intensidad Campo Electrico incidente (V/m)</p>
                        <input value={Einc.value} type="number" min="0" onInput={(e) => Einc.value = +e.currentTarget.value}/>
                    </div>
                    <div class="extras-input">
                        <p>Intensidad Campo Magnetico incidente (A/m)</p>
                        <input value={Hinc.value} type="number" min="0" onInput={(e) => Hinc.value = +e.currentTarget.value}/>
                    </div>
                    <div class="extras-input">
                        <p>Densidad de potencia incidente (W/m)</p>
                        <input value={Sinc.value} type="number" min="0" onInput={(e) => Sinc.value = +e.currentTarget.value}/>
                    </div>
                    <div class="extras-input">
                        <p>Limite Campo Electrico (V/m)</p>
                        <input type="number" min="0" value={Elim.value} onInput={(e) => Elim.value = +e.currentTarget.value}/>
                    </div>
                    <div class="extras-input">
                        <p>Limite Campo Magnetico (A/m)</p>
                        <input type="number" min="0" value={Hlim.value} onInput={(e) => Hlim.value = +e.currentTarget.value}/>
                    </div>
                    <div class="extras-input">
                        <p>Limite Densidad Potencia (W/m)</p>
                        <input type="number" min="0" value={Slim.value} onInput={(e) => Slim.value = +e.currentTarget.value}/>
                    </div>
                    <div class="extras-input">
                        <p>Campo Electrico - RMS (V/m)</p>
                        <input type="number" min="0" value={ERMS.value} onInput={(e) => ERMS.value = +e.currentTarget.value}/>
                    </div>
                    <div class="extras-input">
                        <p>Campo Magnetico - RMS (A/m)</p>
                        <input type="number" min="0" value={HRMS.value} onInput={(e) => HRMS.value = +e.currentTarget.value}/>
                    </div>
                    <div class="extras-input">
                        <p>Densidad Potencia - RMS (W/m)</p>
                        <input type="number" min="0" value={SRMS.value} onInput={(e) => SRMS.value = +e.currentTarget.value}/>
                    </div>
                </div>
           </div>
    </div>);
}
