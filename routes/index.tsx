import Foot from "../components/Foot.tsx";
import Libreradio from "../components/Libreradio.tsx";
import BarraNavegacion from "../islands/Navigation.tsx";
import Bandas from "../islands/Bandas.tsx";
import Results from "../islands/Results.tsx";

export default function Home() {
  return (
    <div class="main-page">
        <BarraNavegacion/>
        <Libreradio />
        <Bandas/>
        <Results/>
        <Foot/>
    </div>
  );
}
