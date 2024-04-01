import Evalua from "../islands/Evaluate.tsx";

export interface informacion {
    index: number;
    potencia : number;
    atenuacion : number;
    gananciaIsotropa : number;
    gananciaReal : number;
    nombre : string;
    frecuencia : number;

    Einc : number;
    Hinc : number;
    Sinc : number;

    Elim : number;
    Hlim : number;
    Slim : number;

    ERMS : number;
    HRMS : number;
    SRMS : number;

    pire: number;
    per: number;
    ER: number;
}

export default function Informacion(props: informacion) {
    return(
            <div class="eval-info">
                    <h1>Banda {props.index+1}</h1>
                <div class="meta-eval">
                    <div class="meta-left">
                        <h2>Datos de la banda "{props.nombre}"</h2>
                        <div class="eval-data">
                            <p>Potencia: {props.potencia} db</p>
                            <p>Atenuacion: {props.atenuacion} db</p>
                            <p>Ganancia Isotropa: {props.gananciaIsotropa} dbi</p>
                            <p>Ganancia Real: {props.gananciaReal} db</p>
                            <p>Frecuencia: {props.frecuencia} Mhz</p>
                        </div>
                        <div class="eval-compute">
                            <p>PIRE: {props.pire} db</p>
                            <p>PER: {props.per} db</p>
                            <p>ER: {props.ER}</p>
                        </div>
                    </div>
                    <div class="meta-right">
                        <h2>Datos medidos en campo</h2>
                        <div class="eval-data">
                            <p>Campo Electrico incidente: {props.Einc} V/m</p>
                            <p>Campo Magnetico incidente: {props.Hinc} A/m</p>
                            <p>Densidad de Potencia incidente: {props.Sinc} W/m</p>
                            <p>Campo Electrico limite: {props.Elim} V/m</p>
                            <p>Campo Magnetico limite: {props.Hlim} A/m</p>
                            <p>Densidad de potencia limite: {props.Slim} W/m</p>
                            <p>Campo Electrico - RMS: {props.ERMS} V/m</p>
                            <p>Campo Magnetico - RMS: {props.ERMS} A/m</p>
                            <p>Densidad de Potencia - RMS: {props.ERMS} W/m</p>
                        </div>
                    </div>
                </div>
                <Evalua Einc={props.Einc} Hinc={props.Hinc}
                        Sinc={props.Sinc} frecuencia={props.frecuencia}/>
            </div>
          );
}
