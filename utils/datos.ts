import {signal} from "@preact/signals";

interface Datos {
    potencia: number;
    atenuacion: number;
    gananciaIsotropa: number;
    gananciaReal: number;
    frecuencia: number;
    index: number;
    nombre: string;
    OcEinc: number,
    OcHinc: number,
    OcSinc: number,
    PobEinc: number,
    PobHinc: number,
    PobSinc: number,
    pire: number,
    per: number
}

export const listaDatos = signal<Datos[]>([]);

export function leerLocalStorage(){
        let LSListaDatos = JSON.parse(localStorage.getItem("LSlistaDatos"));
        if ( LSListaDatos !== null ) {
            LSListaDatos = Object.values(LSListaDatos);
            listaDatos.value = [...LSListaDatos];
        }
}

