import {signal} from "@preact/signals";

interface Datos {
    index: number;
    potencia: number;
    atenuacion: number;
    gananciaIsotropa: number;
    gananciaReal: number;
    nombre: string;
    frecuencia: number;

    Einc: number,
    Hinc: number,
    Sinc: number,

    Elim: number,
    Hlim: number,
    Slim: number,
    ERMS: number,
    HRMS: number,
    SRMS: number,

    pire: number,
    per: number,
    ER: number
}

export const listaDatos = signal<Datos[]>([]);

export function leerLocalStorage(){
        let LSListaDatos = JSON.parse(localStorage.getItem("LSlistaDatos"));
        if ( LSListaDatos !== null ) {
            LSListaDatos = Object.values(LSListaDatos);
            listaDatos.value = [...LSListaDatos];
        }
}

