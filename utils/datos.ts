import { Signal, signal, ReadonlySignal, computed } from "@preact/signals";


function easyRound(value: number){
    return Math.round((value + Number.EPSILON) * 100) / 100;
}

export interface Datos {
    nombre: Signal<string>;
    frecuencia: Signal<number>;

    cert_nombre: Signal<string>;
    cert_contacto: Signal<string>;

    Einc_o: Signal<number>,
    Hinc_o: Signal<number>,
    Sinc_o: Signal<number>,
    Einc_p: Signal<number>,
    Hinc_p: Signal<number>,
    Sinc_p: Signal<number>,

    pire: Signal<number>,
    per: Signal<number>,
    
    EvSimp_a_p: Signal<number>,
    EvSimp_r_p: Signal<number>,
    EvSimp_d_p: ReadonlySignal<number>

    EvSimp_a_o: Signal<number>,
    EvSimp_r_o: Signal<number>,
    EvSimp_d_o: ReadonlySignal<number>
}

export const datos: Datos = {
    nombre: signal(""),
    cert_nombre: signal(""),
    cert_contacto: signal(""),

    frecuencia: signal(0),

    Einc_o: signal(0),
    Hinc_o: signal(0),
    Sinc_o: signal(0),
    Einc_p: signal(0),
    Hinc_p: signal(0),
    Sinc_p: signal(0),

    pire: signal(0),
    per: signal(0),

    EvSimp_a_p: signal(0),
    EvSimp_r_p: signal(0),
    EvSimp_a_o: signal(0),
    EvSimp_r_o: signal(0),

    get EvSimp_d_o() {
        return computed(()=>{
            if (this.EvSimp_a_o > this.EvSimp_r_o) 
                { return -1;}else{
                        const num = (Math.pow(this.EvSimp_r_o.value,2)-Math.pow(this.EvSimp_a_o.value,2))
                        return easyRound(num);
                    }
        });},

    get EvSimp_d_p() {
        return computed(()=>{
            if (this.EvSimp_a_p > this.EvSimp_r_p) 
                { return -1;}else{
                        const num = (Math.pow(this.EvSimp_r_p.value,2)-Math.pow(this.EvSimp_a_p.value,2))
                        return easyRound(num);
                    }
        });},
};
