import Info from "../components/boolInfo.tsx";

interface resultado = {
	informacion : Array<string>,
	condicion: boolean,
	aplica: number
}

// Aporte de Andres Parra y Jonathan Cabrera
function limitesMaximosExposicionOcupacional(Elim: number, Hlim: number,
					     ERMS: number, HRMS: number,
					     frecuencia: number) {
	let resultado: resultado = {
		informacion = [],
		condicion = false,
		aplica = false
	}

	let ER = Math.max(Math.pow(ERMS/Elim,2),Math.pow(HRMS/Hlim,2));

	if ( frecuencia >= 0.1 && frecuencia <=30 ){
		resultado.informacion.push("En escenarios de exposicion ocupacional, la densidad de potencia no aplica para frecuencias menores a 30Mhz");
		if (ER <= (660 / Math.pow(frecuencia,0.7)) &&
		    ER <= (4.9/ frecuencia)){
			resultado.informacion.push("En escenarios de exposicion ocupacional, la medicion cumple con los Limites maximos de exposicion");
			resultado.condicion = true;
			resultado.aplica = true;
			return resultado;
		} else {
			resultado.condicion = false;
			resultado.aplica = true;

			if (ER <= (660 / Math.pow(frecuencia,0.7))){
				resultado.informacion.push("En escenarios de exposicion ocupacional, sobrepasa los limites maximos de exposicion para la intensidad de campo electrico, ER: "+ER+" >  "+(660 / Math.pow(frecuencia,0.7)));
			}

			if (ER <= (4.9 / frecuencia)){
				resultado.informacion.push("En escenarios de exposicion ocupacional, sobrepasa los limites maximos de exposicion para la intensidad de campo magnetico, ER: "+ER+" > "+(4.9/frecuencia));
			}
			return resultado;
		}
	} else if ( frecuencia > 30 && frecuencia <= 400){
		if (ER <= 61 && ER <= 0.16 && ER <= 10){
			resultado.informacion.push("En escenarios de exposicion ocupacional, la medicion cumple con los Limites maximos de exposicion");
			resultado.condicion = true;
			resultado.aplica = true;
			return resultado;
		}else{
			resultado.condicion = false;
			resultado.aplica = true;
			if(ER > 61){resultado.informacion.push(`En escenarios de exposicion ocupacional, sobrepasa los limites de exposicion para la intensidad de campo electrico, ER: ${ER} > 61`);}
			if(ER > 0.16){resultado.informacion.push(`En escenarios de exposicion ocupacional, sobrepasa los limites de exposicion para la intensidad de campo magnetico, ER: ${ER} > 0.16`);}
			if(ER > 10){resultado.informacion.push(`En escenarios de exposicion ocupacional, sobrepasa los limites de exposicion para la densidad de potencia, ER: ${ER} > 10`);}
			return resultado;
		}
	} else if (frecuencia > 400 && frecuencia <= 2000){
		if (ER <= 3*Math.pow(frecuencia,0.5) && ER <= 0.0008*Math.pow(frecuencia,0.5)
                    && ER <= frecuencia/40)){
			resultado.informacion.push("En escenarios de exposicion ocupacional, la medicion cumple con los Limites maximos de exposicion");
			resultado.condicion = true;
			resultado.aplica = true;
			return resultado;
		    }else{
			resultado.condicion = false;
			resultado.aplica = true;
			if(ER > 3*Math.pow(frecuencia,0.5)){resultado.informacion.push(`En escenarios de exposicion ocupacional, sobrepasa los limites de exposicion para la intensidad de campo electrico, ER: ${ER} > ${3*Math.pow(frecuencia,0.5)}`);}
			if(ER > 0.0008*Math.pow(frecuencia,0.5)){resultado.informacion.push(`En escenarios de exposicion ocupacional, sobrepasa los limites de exposicion para la intensidad de campo magnetico, ER: ${ER} > ${0.0008*Math.pow(frecuencia,0.5)}`);}
			if(ER > frecuencia/40){resultado.informacion.push(`En escenarios de exposicion ocupacional, sobrepasa los limites de exposicion para la densidad de potencia, ER: ${ER} > ${frecuencia/40}`);}

			return resultado;
		    }
	}else if (frecuencia > 2000){
		resultado.informacion.push("Para Frecuencias mayores a 2Ghz no se aplican las evaluaciones de Intensidad del campo electrico ni del campo magnetico.");
		if (ER <= 50){
			resultado.condicion=true;
			resultado.aplica=true;
			resultado.informacion.push("En escenarios de exposicion ocupacional, cumple con los limites maximos de exposicion");
		}else{
			resultado.condicion=false;
			resultado.aplica=true;
			resultado.informacion.push(`En escenarios de exposicion ocupacional, la densidad de potencia excede los limites. ER: ${ER} > 50`);
			return resultado;
	}else{
		resultado.condicion=false;
		resultado.aplica=true;
		resultado.informacion.push("La frecuencia abnormalmente excede los rangos de evaluacion.");
		return resultado;
	}

}

export default function Eval(props: Array) {
}
