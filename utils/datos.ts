import { Signal, signal, ReadonlySignal, computed } from "@preact/signals";

export interface Datos {
    nombre: Signal<string>;
    frecuencia: Signal<number>;

    Einc: Signal<number>,
    Hinc: Signal<number>,
    Sinc: Signal<number>,

    Elim: Signal<number>,
    Hlim: Signal<number>,
    Slim: Signal<number>,
    ERMS: Signal<number>,
    HRMS: Signal<number>,
    SRMS: Signal<number>,

    pire: Signal<number>,
    per: Signal<number>,
    ER: ReadonlySignal<number>
}

export const datos: Datos = {
    nombre: signal(""),
    frecuencia: signal(0),

    Einc: signal(0),
    Hinc: signal(0),
    Sinc: signal(0),

    Elim: signal(0),
    Hlim: signal(0),
    Slim: signal(0),
    ERMS: signal(0),
    HRMS: signal(0),
    SRMS: signal(0),

    pire: signal(0),
    per: signal(0),

    get ER() {
        return computed(()=>{
            const num = Math.max(Math.pow(this.ERMS.value/this.Elim.value,2),Math.pow(this.HRMS.value/this.Hlim.value,2));
            return Math.round((num + Number.EPSILON) * 100) / 100;
        });
    }
};

export const ER: ReadonlySignal = computed(()=> {
                              const num = Math.max(Math.pow(datos.ERMS.value/datos.Elim.value,2),Math.pow(datos.HRMS.value/datos.Hlim.value,2));
                              return Math.round((num + Number.EPSILON) * 100) / 100;
                          });
