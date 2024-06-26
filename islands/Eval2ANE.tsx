import CheckList from "../components/checkList.tsx";
import { Signal } from "preact/hooks";

interface resultado {
    donde: string;
    informacion: string[];
    condicion: boolean;
    aplica: boolean;
}

// Aporte de Andres Parra y Jonathan Cabrera
function limitesMaximosExposicionOcupacional(Einc: number, Hinc: number, Sinc: number,
                                             frecuencia: number) {
	const resultado: resultado = {
        donde: "[Punto 2 ANE] Limites maximos de exposicion espacio ocupacional",
		informacion : [],
		condicion : false,
		aplica : false
	}


	if ( frecuencia >= 0.1 && frecuencia <=30 ){
		resultado.informacion.push("En escenarios de exposicion ocupacional, la densidad de potencia no aplica para frecuencias menores a 30Mhz.");
        const resultadoA: number = (660 / Math.pow(frecuencia,0.7));
        const resultadoB: number = (4.9/ frecuencia);
		if ((Einc <= resultadoA ) && Hinc <= resultadoB){
			resultado.informacion.push("En escenarios de exposicion ocupacional, la medicion cumple con los Limites maximos de exposicion.");
			resultado.condicion = true;
			resultado.aplica = true;
			return resultado;
		} else {
			resultado.condicion = false;
			resultado.aplica = true;

			if (Einc > resultadoA){
				resultado.informacion.push(`En escenarios de exposicion ocupacional, sobrepasa los limites maximos de exposicion para la intensidad de campo electrico incidente, Einc: ${Einc} >  ${resultadoA}`);
			}

			if (Hinc > resultadoB){
				resultado.informacion.push(`En escenarios de exposicion ocupacional, sobrepasa los limites maximos de exposicion para la intensidad de campo magnetico incidente, Hinc: ${Hinc} > ${resultadoB}`);
			}
			return resultado;
		}
	} else if ( frecuencia > 30 && frecuencia <= 400){
		if (Einc <= 61 && Hinc <= 0.16 && Sinc <= 10){
			resultado.informacion.push("En escenarios de exposicion ocupacional, la medicion cumple con los Limites maximos de exposicion.");
			resultado.condicion = true;
			resultado.aplica = true;
			return resultado;
		}else{
			resultado.condicion = false;
			resultado.aplica = true;
			if(Einc > 61){resultado.informacion.push(`En escenarios de exposicion ocupacional, sobrepasa los limites de exposicion para la intensidad de campo electrico incidente, Einc: ${Einc} > 61`);}
			if(Hinc > 0.16){resultado.informacion.push(`En escenarios de exposicion ocupacional, sobrepasa los limites de exposicion para la intensidad de campo magnetico incidente, Hinc: ${Hinc} > 0.16`);}
			if(Sinc > 10){resultado.informacion.push(`En escenarios de exposicion ocupacional, sobrepasa los limites de exposicion para la densidad de potencia incidente, Sinc: ${Sinc} > 10`);}
			return resultado;
		}
	} else if (frecuencia > 400 && frecuencia <= 2000){
        const resultadoA = 3*Math.pow(frecuencia,0.5);
        const resultadoB = 0.0008*Math.pow(frecuencia,0.5);
        const resultadoC = frecuencia/40;
		if (Einc <= resultadoA && Hinc <= resultadoB && Sinc <= resultadoC){
                            resultado.informacion.push("En escenarios de exposicion ocupacional, la medicion cumple con los Limites maximos de exposicion.");
                            resultado.condicion = true;
                            resultado.aplica = true;
                            return resultado;
		    }else{
                resultado.condicion = false;
                resultado.aplica = true;
                if(Einc > resultadoA){resultado.informacion.push(`En escenarios de exposicion ocupacional, sobrepasa los limites de exposicion para la intensidad de campo electrico incidente, Einc: ${Einc} > ${resultadoA}`);}
                if(Hinc > resultadoB){resultado.informacion.push(`En escenarios de exposicion ocupacional, sobrepasa los limites de exposicion para la intensidad de campo magnetico incidente, Hinc: ${Hinc} > ${resultadoB}`);}
                if(Sinc > resultadoC){resultado.informacion.push(`En escenarios de exposicion ocupacional, sobrepasa los limites de exposicion para la densidad de potencia incidente, Sinc: ${Sinc} > ${resultadoC}`);}

                return resultado;
		    }
	}else if (frecuencia > 2000){
		resultado.informacion.push("Para Frecuencias mayores a 2Ghz no se aplican las evaluaciones de Intensidad del campo electrico ni del campo magnetico.");
            if (Sinc <= 50){
                resultado.condicion=true;
                resultado.aplica=true;
                resultado.informacion.push("En escenarios de exposicion ocupacional, cumple con los limites maximos de exposicion.");
            }else{
                resultado.condicion=false;
                resultado.aplica=true;
                resultado.informacion.push(`En escenarios de exposicion ocupacional, la densidad de potencia incidente excede los limites. Sinc: ${Sinc} > 50`);
                return resultado;
            }
        }else{
            resultado.condicion=false;
            resultado.aplica=true;
            resultado.informacion.push("La frecuencia esta fuera de los rangos de evaluacion.");
            return resultado;
        }

}

function limitesMaximosExposicionPoblacional(Einc: number, Hinc: number, Sinc: number,
                                             frecuencia: number) {
	const resultado: resultado = {
        donde: "[Punto 2 ANE] Limites maximos de exposicion espacio poblacional",
		informacion : [],
		condicion : false,
		aplica : false
	}

	//const ER = Math.max(Math.pow(ERMS/Elim,2),Math.pow(HRMS/Hlim,2));

	if ( frecuencia >= 0.1 && frecuencia <=30 ){
		resultado.informacion.push("En escenarios de exposicion poblacional, la densidad de potencia no aplica para frecuencias menores a 30Mhz.");
        const resultadoA = (300 / Math.pow(frecuencia,0.7));
        const resultadoB = (2.2/ frecuencia);
		if (Einc <= resultadoA && Hinc <= resultadoB){
                resultado.informacion.push("En escenarios de exposicion poblacional, la medicion cumple con los Limites maximos de exposicion.");
                resultado.condicion = true;
                resultado.aplica = true;
                return resultado;
		} else {
			resultado.condicion = false;
			resultado.aplica = true;
			if (Einc > resultadoA){
				resultado.informacion.push(`En escenarios de exposicion poblacional, sobrepasa los limites maximos de exposicion para la intensidad de campo electrico incidente, Einc: ${Einc} > ${resultadoA}`);
			}

			if (Einc > resultadoB){
				resultado.informacion.push(`En escenarios de exposicion poblacional, sobrepasa los limites maximos de exposicion para la intensidad de campo magnetico incidente, Hinc: ${Hinc} > ${resultadoB}`);
			}
			return resultado;
		}
	} else if ( frecuencia > 30 && frecuencia <= 400){
		if (Einc <= 27.7 && Hinc <= 0.073 && Sinc <= 2){
			resultado.informacion.push("En escenarios de exposicion poblacional, la medicion cumple con los Limites maximos de exposicion.");
			resultado.condicion = true;
			resultado.aplica = true;
			return resultado;
		}else{
			resultado.condicion = false;
			resultado.aplica = true;
			if(Einc > 27.7){resultado.informacion.push(`En escenarios de exposicion poblacional, sobrepasa los limites de exposicion para la intensidad de campo electrico incidente, Einc: ${Einc} > 27.7`);}
			if(Hinc > 0.073){resultado.informacion.push(`En escenarios de exposicion poblacional, sobrepasa los limites de exposicion para la intensidad de campo magnetico incidente, Hinc: ${Hinc} > 0.073`);}
			if(Sinc > 2){resultado.informacion.push(`En escenarios de exposicion poblacional, sobrepasa los limites de exposicion para la densidad de potencia incidente, Sinc: ${Sinc} > 2`);}
			return resultado;
		}
	} else if (frecuencia > 400 && frecuencia <= 2000){
        const resultadoA = 1.375*Math.pow(frecuencia,0.5);
        const resultadoB = 0.0037*Math.pow(frecuencia,0.5);
        const resultadoC = frecuencia/200;
		if (Einc <= resultadoA && Hinc <= resultadoB && Sinc <= resultadoC){
                resultado.informacion.push("En escenarios de exposicion poblacional, la medicion cumple con los Limites maximos de exposicion.");
                resultado.condicion = true;
                resultado.aplica = true;
                return resultado;
		    }else{
                resultado.condicion = false;
                resultado.aplica = true;

                if(Einc > resultadoA ){resultado.informacion.push(`En escenarios de exposicion poblacional, sobrepasa los limites de exposicion para la intensidad de campo electrico incidente, Einc: ${Einc} > ${resultadoA}`);}

                if(Hinc > resultadoB ){resultado.informacion.push(`En escenarios de exposicion poblacional, sobrepasa los limites de exposicion para la intensidad de campo magnetico incidente, Hinc: ${Hinc} > ${resultadoB}`);}

                if(Sinc > resultadoC ){resultado.informacion.push(`En escenarios de exposicion poblacional, sobrepasa los limites de exposicion para la densidad de potencia incidente, Sinc: ${Sinc} > ${resultadoC}`);}

			return resultado;
		    }
	}else if (frecuencia > 2000){
		resultado.informacion.push("Para Frecuencias mayores a 2Ghz no se aplican las evaluaciones de Intensidad del campo electrico ni del campo magnetico.");
            if (Sinc <= 10){
                resultado.condicion=true;
                resultado.aplica=true;
                resultado.informacion.push("En escenarios de exposicion poblacional, cumple con los limites maximos de exposicion.");
            }else{
                resultado.condicion=false;
                resultado.aplica=true;
                resultado.informacion.push(`En escenarios de exposicion poblacional, la densidad de potencia incidente excede los limites. Sinc: ${Sinc} > 50`);
                return resultado;
            }
        }else{
            resultado.condicion=false;
            resultado.aplica=true;
            resultado.informacion.push("La frecuencia esta fuera de los rangos de evaluacion.");
            return resultado;
        }

}

interface variables {
    Einc_p: number;
    Hinc_p: number;
    Sinc_p: number;
    Einc_o: number;
    Hinc_o: number;
    Sinc_o: number;
    frecuencia: number;
}

export default function Evalua_2ANE(props: variables) {
    const resultados: Array<resultado> = [];
    resultados.push(limitesMaximosExposicionOcupacional(props.Einc_o, props.Hinc_o, props.Sinc_o, props.frecuencia));
    resultados.push(limitesMaximosExposicionPoblacional(props.Einc_p, props.Hinc_p, props.Sinc_p, props.frecuencia));

    return (
        <div class="checkList">
    {resultados.map((resultado: any)=>{
                return <CheckList condicion={resultado.condicion}
                           aplica={resultado.aplica}
                           info={resultado.informacion}
                           donde={resultado.donde}/>
                })}
        </div>);
}
