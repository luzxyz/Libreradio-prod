import Evalua_2ANE from "../islands/Eval2ANE.tsx";
import Evalua_3_2ANE from "../islands/Eval3_2ANE.tsx";
import { datos } from "../utils/datos.ts"

export default function Informacion() {
    return(
            <div class="eval-info">
                <Evalua_2ANE
                        Einc_p={datos.Einc_p.value}
                        Hinc_p={datos.Hinc_p.value}
                        Sinc_p={datos.Sinc_p.value}
                        Einc_o={datos.Einc_o.value}
                        Hinc_o={datos.Hinc_o.value}
                        Sinc_o={datos.Sinc_o.value}
                        frecuencia={datos.frecuencia.value}/>
                <Evalua_3_2ANE
                        a_o={datos.EvSimp_a_o.value}
                        r_o={datos.EvSimp_r_o.value}
                        a_p={datos.EvSimp_a_p.value}
                        r_p={datos.EvSimp_r_p.value}
                        pire={datos.pire.value}
                        per={datos.per.value}
                        frecuencia={datos.frecuencia.value}/>
            </div>
          );
}
