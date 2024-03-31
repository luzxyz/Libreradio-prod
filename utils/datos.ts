import {signal} from "@preact/signals";

interface Datos {
    potencia: number;
    atenuacion: number;
    gananciaIsotropa: number;
    gananciaReal: number;
    frecuencia: number;
    index: number;
    nombre: string;
}

export const listaDatos = signal<Datos[]>([]);
