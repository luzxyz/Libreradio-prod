import { useSignal,useComputed } from "@preact/signals";

export default function PirePer(props: [index: number]) {
    const potencia = useSignal(0);
    const atenuacion = useSignal(0);
    const gananciaIsotropa = useSignal(0);
    const gananciaReal = useSignal(0);
    const nombre = useSignal("NombreAntena");
    const frecuencia = useSignal(0);

    const OcEinc = useSignal(0);
    const OcHinc = useSignal(0);
    const OcSinc = useSignal(0);

    const PobEinc = useSignal(0);
    const PobHinc = useSignal(0);
    const PobSinc = useSignal(0);

    const pire = useComputed(() => potencia.value+atenuacion.value+
                                   gananciaIsotropa.value);
    const per = useComputed(() => potencia.value+atenuacion.value+
                                   gananciaReal.value);
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
            <input value={0} type="number" min="0" onInput={(e) => frecuencia.value = +e.currentTarget.value}/>

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
			<input value={0} type="number" min="0" onInput={(e) => OcEinc.value = e.currentTarget.value}/>
		</div>
	    	<div class="extras-input">
			<p>Intensidad Campo Magnetico incidente</p>
			<input value={0} type="number" min="0" onInput={(e) => OcHinc.value = e.currentTarget.value}/>
		</div>
	    	<div class="extras-input">
			<p>Densidad de potencia incidente</p>
			<input value={0} type="number" min="0" onInput={(e) => OcSinc.value = e.currentTarget.value}/>
		</div>
	    </div>
            <p><strong>Datos zona poblacional</strong></p>
            <img src="/family.svg" alt="Civiles" width="45" />
	    <div class="extras-data">
	    	<div class="extras-input">
			<p>Intensidad Campo Electrico incidente</p>
			<input value={0} type="number" min="0" onInput={(e) => PobEinc.value = e.currentTarget.value}/>
		</div>
	    	<div class="extras-input">
			<p>Intensidad Campo Magnetico incidente</p>
			<input value={0} type="number" min="0" onInput={(e) => PobHinc.value = e.currentTarget.value}/>
		</div>
	    	<div class="extras-input">
			<p>Densidad de potencia incidente</p>
			<input value={0} type="number" min="0" onInput={(e) => PobSinc.value = e.currentTarget.value}/>
		</div>
	    </div>
           </div>
    </div>);
}
