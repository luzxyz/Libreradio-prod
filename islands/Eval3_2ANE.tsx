import CheckList from "../components/checkList.tsx";
import { Signal, ReadonlySignal } from "preact/hooks";

interface resultado {
    donde: string;
    informacion: string[];
    condicion: boolean;
    aplica: boolean;
}

function minDistanciaPublico(PIRE: number, PER: number, frecuencia: number, r: number){
     
	const resultado: resultado = {
        donde: "[Punto 3.2 ANE] Evaluacion simplificada para niveles de exposicion Publico General",
		informacion : [],
		condicion : false,
		aplica : true 
	}

    if (30 <= frecuencia && frecuencia <= 400){

        let r_min = 0;
        if (PIRE > 0){
            r_min = 0.319*Math.sqrt(PIRE);
        }else if ( PER > 0 ){
            r_min = 0.409*Math.sqrt(PER);
        } else {r_min = 0}

        if ( r >= r_min ){
            resultado.condicion = true;
            resultado.informacion.push(`Cumple r: ${r} > r minimo ${r_min}`);
        }else{
            resultado.informacion.push(`No cumple r: ${r} < r minimo ${r_min}`);
        }
    }else if(400 < frecuencia && frecuencia <= 2000 && frecuencia > 0){
        let r_min = 0;        
        if (PIRE > 0){
            r_min = 6.38*Math.sqrt(PIRE/frecuencia);        
        }else if ( PER > 0 ){
            r_min = 8.16*Math.sqrt(PER/frecuencia);        
        }else {r_min = 0}

        if ( r >= r_min ){
            resultado.condicion = true;
            resultado.informacion.push(`Cumple r: ${r} > r minimo ${r_min}`);
        }else{
            resultado.informacion.push(`No cumple r: ${r} < r minimo ${r_min}`);
        }
    }else if ( 2000 < frecuencia && frecuencia <= 300000 ){
        let r_min = 0;        
        if (PIRE > 0){
            r_min = 0.143*Math.sqrt(PIRE);        
        }else if ( PER > 0 ){
            r_min = 0.184*Math.sqrt(PER);        
        }else {r_min = 0}
        if ( r >= r_min ){
            resultado.condicion = true;
            resultado.informacion.push(`Cumple r: ${r} > r minimo ${r_min}`);
        }else{
            resultado.informacion.push(`No cumple r: ${r} < r minimo ${r_min}`);
        }

    }else{
        resultado.condicion=false;
        resultado.aplica=true;
        resultado.informacion.push("La frecuencia esta fuera de los rangos de evaluacion.");
        return resultado;

    }
    return resultado;
}

function minDistanciaOcupacional(PIRE: number, PER: number, frecuencia: number, r: number){
     
	const resultado: resultado = {
        donde: "[Punto 3.2 ANE] Evaluacion simplificada para niveles de exposicion ocupacional",
		informacion : [],
		condicion : false,
		aplica : true 
	}

    if (30 <= frecuencia && frecuencia <= 400){
        let r_min = 0.143*Math.sqrt(PIRE);        
        if (PIRE > 0){
            r_min = 0.143*Math.sqrt(PIRE);        
        }else if ( PER > 0 ){
            r_min = 0.184*Math.sqrt(PER);        
        }else {r_min = 0}
        if ( r >= r_min ){
            resultado.condicion = true;
            resultado.informacion.push(`Cumple r: ${r} > r minimo ${r_min}`);
        }else{
            resultado.informacion.push(`No cumple r: ${r} < r minimo ${r_min}`);
        }
    }else if(400 < frecuencia && frecuencia <= 2000){
        let r_min = 2.92*Math.sqrt(PIRE/frecuencia);        
        if (PIRE > 0){
            r_min = 2.92*Math.sqrt(PIRE/frecuencia);        
        }else if ( PER > 0 ){
            r_min = 3.74*Math.sqrt(PER/frecuencia);        
        }else {r_min = 0}
        if ( r >= r_min ){
            resultado.condicion = true;
            resultado.informacion.push(`Cumple r: ${r} > r minimo ${r_min}`);
        }else{
            resultado.informacion.push(`No cumple r: ${r} < r minimo ${r_min}`);
        }
    }else if ( 2000 < frecuencia && frecuencia <= 300000 ){
        let r_min = 0;        
        if (PIRE > 0){
            r_min = 0.0638*Math.sqrt(PIRE);        
        }else if ( PER > 0 ){
            r_min = 0.0189*Math.sqrt(PER);        
        }else {r_min = 0}
        if ( r >= r_min ){
            resultado.condicion = true;
            resultado.informacion.push(`Cumple r: ${r} > r minimo ${r_min}`);
        }else{
            resultado.informacion.push(`No cumple r: ${r} < r minimo ${r_min}`);
        }

    }else{
        resultado.condicion=false;
        resultado.informacion.push("La frecuencia esta fuera de los rangos de evaluacion.");
        return resultado;

    }

    return resultado;
}

function a_mayor_r(caso: string){
   	const resultado: resultado = {
        donde: `[Punto 3.2 ANE] Evaluacion simplificada para niveles de exposicion ${caso}`,
		informacion : ["El valor a no debe superar a r"],
		condicion : false,
		aplica : true 
	}
    return resultado;
}

interface variables {
    a_o: number;
    r_o: number;
    a_p: number;
    r_p: number;
    frecuencia: number;
    pire: number;
    per: number;
}

export default function Evalua_3_2ANE(props: variables){
    const resultados: Array<resultado> = [];

    if (props.a_o < props.r_o){
        resultados.push(minDistanciaOcupacional(props.pire, props.per, props.frecuencia,props.r_o));
    }else{
        resultados.push(a_mayor_r("ocupacional"));
    }

    if (props.a_p < props.r_p){
        resultados.push(minDistanciaPublico(props.pire, props.per, props.frecuencia,props.r_p));
    }else{
        resultados.push(a_mayor_r("poblacional"));
    }

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
