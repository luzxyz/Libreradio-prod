
export interface informacion {
    index: number;
    potencia : number;
    atenuacion : number;
    gananciaIsotropa : number;
    gananciaReal : number;
    nombre : string;
    frecuencia : number;

    OcEinc : number;
    OcHinc : number;
    OcSinc : number;

    PobEinc : number;
    PobHinc : number;
    PobSinc : number;

    pire: number;
    per: number;
}

export default function Informacion(props: informacion) {
    return(
            <div class="eval-info">
                <h1>Banda {props.index+1}</h1>
                <h2>Datos de la banda "{props.nombre}"</h2>
                <div class="eval-data">
                    <p>Potencia(db) : {props.potencia}</p>
                    <p>Atenuacion(db) : {props.atenuacion}</p>
                    <p>Ganancia Isotropa(dbi): {props.gananciaIsotropa}</p>
                    <p>Ganancia Real(db): {props.gananciaReal}</p>
                    <p>Frecuencia(Mhz): {props.frecuencia}</p>
                </div>
                <h2>Datos zona ocupacional</h2>
                <div class="eval-data">
                    <p>Campo Electrico incidente: {props.OcEinc}</p>
                    <p>Campo Magnetico incidente: {props.OcHinc}</p>
                    <p>Densidad de Potencia incidente: {props.OcSinc}</p>
                </div>
                <h2>Datos zona poblacional</h2>
                <div class="eval-data">
                    <p>Campo Electrico incidente: {props.PobEinc}</p>
                    <p>Campo Magnetico incidente: {props.PobHinc}</p>
                    <p>Densidad de Potencia incidente: {props.PobSinc}</p>
                </div>
                <div class="eval-compute">
                    <p>PIRE(db): {props.pire}</p>
                    <p>PER(db): {props.per}</p>
                </div>
            </div>
          );
}
