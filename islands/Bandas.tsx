import PirePer from "./PirePer.tsx";

export default function Bandas() {

    return (
        <div class="inputs">
        <h2>Datos configuración de antenas</h2>
        <p>Nota: Todos los datos pedidos deben ser diligenciados en lo posible.</p>
        <p>Coloca cero (0) cuando no se haya medido.</p>
        <div class="content">
            <div class="bandas-container">
               <PirePer /> 
            </div>
        </div>
        </div>
           );

}
