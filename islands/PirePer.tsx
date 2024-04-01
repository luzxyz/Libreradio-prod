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

    OcEinc : number;
    OcHinc : number;
    OcSinc : number;

    PobEinc : number;
    PobHinc : number;
    PobSinc : number;
}

export default function PirePer(props: pirePer) {
    const potencia = useSignal(props.potencia);
    const atenuacion = useSignal(props.atenuacion);
    const gananciaIsotropa = useSignal(props.gananciaIsotropa);
    const gananciaReal = useSignal(props.gananciaReal);
    const nombre = useSignal(props.nombre);
    const frecuencia = useSignal(props.frecuencia);

    const OcEinc = useSignal(props.OcEinc);
    const OcHinc = useSignal(props.OcHinc);
    const OcSinc = useSignal(props.OcSinc);

    const PobEinc = useSignal(props.PobEinc);
    const PobHinc = useSignal(props.PobHinc);
    const PobSinc = useSignal(props.PobSinc);

    const pire = useComputed(() => potencia.value+atenuacion.value+
                                   gananciaIsotropa.value);
    const per = useComputed(() => potencia.value+atenuacion.value+
                                   gananciaReal.value);

    useEffect(() => {
        const newDatos = {
            potencia: potencia.value,
            atenuacion: atenuacion.value,
            gananciaIsotropa: gananciaIsotropa.value,
            gananciaReal: gananciaReal.value,
            frecuencia: frecuencia.value,
            index: props.index,
            nombre: nombre.value,
            OcEinc: OcEinc.value,
            OcHinc: OcHinc.value,
            OcSinc: OcSinc.value,
            PobEinc: PobEinc.value,
            PobHinc: PobHinc.value,
            PobSinc: PobSinc.value,
            pire: pire.value,
            per: per.value
        }
        
        listaDatos.value.splice(props.index,1,newDatos);

        localStorage.setItem("LSlistaDatos",JSON.stringify(listaDatos.value));

      }, [potencia.value, atenuacion.value, gananciaIsotropa.value,
          gananciaReal.value, nombre.value, frecuencia.value,
          OcEinc.value, OcHinc.value, OcSinc.value,
          PobEinc.value, PobHinc.value, PobSinc.value,
          pire.value, per.value]);

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
           </div>
           <div class="extras-1">
            <p><strong>Datos zona ocupacional</strong></p>
            <img src="/safhelm.svg" alt="Trabajador" width="45" />
	    <div class="extras-data">
	    	<div class="extras-input">
			<p>Intensidad Campo Electrico incidente</p>
			<input value={OcEinc.value} type="number" min="0" onInput={(e) => OcEinc.value = +e.currentTarget.value}/>
		</div>
	    	<div class="extras-input">
			<p>Intensidad Campo Magnetico incidente</p>
			<input value={OcHinc.value} type="number" min="0" onInput={(e) => OcHinc.value = +e.currentTarget.value}/>
		</div>
	    	<div class="extras-input">
			<p>Densidad de potencia incidente</p>
			<input value={OcSinc.value} type="number" min="0" onInput={(e) => OcSinc.value = +e.currentTarget.value}/>
		</div>
	    </div>
            <p><strong>Datos zona poblacional</strong></p>
            <img src="/family.svg" alt="Civiles" width="45" />
	    <div class="extras-data">
	    	<div class="extras-input">
			<p>Intensidad Campo Electrico incidente</p>
			<input value={PobEinc.value} type="number" min="0" onInput={(e) => PobEinc.value = +e.currentTarget.value}/>
		</div>
	    	<div class="extras-input">
			<p>Intensidad Campo Magnetico incidente</p>
			<input value={PobHinc.value} type="number" min="0" onInput={(e) => PobHinc.value = +e.currentTarget.value}/>
		</div>
	    	<div class="extras-input">
			<p>Densidad de potencia incidente</p>
			<input value={PobSinc.value} type="number" min="0" onInput={(e) => PobSinc.value = +e.currentTarget.value}/>
		</div>
	    </div>
           </div>
    </div>);
}
