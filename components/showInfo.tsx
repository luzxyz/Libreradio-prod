import Evalua from "../islands/Evaluate.tsx";
import { datos } from "../utils/datos.ts"

export default function Informacion() {
    return(
            <div class="eval-info">
                <Evalua Einc={datos.Einc.value}
                        Hinc={datos.Hinc.value}
                        Sinc={datos.Sinc.value}
                        frecuencia={datos.frecuencia.value}/>
            </div>
          );
}
