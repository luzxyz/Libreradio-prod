import Foot from "../components/Foot.tsx";
import Libreradio from "../components/Libreradio.tsx";
import Informacion from "../islands/showInfo.tsx";
import BarraNavegacion from "../islands/Navigation.tsx";
import Transmisor from "../islands/Transmisor.tsx";

export default function Home() {
  return (
    <div class="main-page">
        <BarraNavegacion/>
        <Libreradio />
        <div class="inputs">
            <h2>Datos configuración de antenas</h2>
            <h4>Actualizado según la <a target="_blank" href="https://www.ane.gov.co/Sliders/ANE%202021/Resolucio%CC%81n%20%20No.%20000773%20de%2031102023.pdf">resolución 000773 de 2023-10-31</a> de la ANE, para bandas no IMT. Por favor lea las definiciones y procedimientos de medición declarados.</h4>
            <p>Nota: Todos los datos pedidos deben ser diligenciados en lo posible.</p>
            <div class="bandas-container">
                <Transmisor/>
            </div>
        </div>
        <h1 class="main-title underline"><span class="star-font">Evalua</span>ción</h1>
        <Informacion/>
        <Foot/>
    </div>
  );
}
