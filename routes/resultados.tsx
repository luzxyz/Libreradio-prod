import Foot from "../components/Foot.tsx";
import Libreradio from "../components/Libreradio.tsx";
import Results from "../islands/Results.tsx";
import BarraNavegacion from "../islands/Navigation.tsx";

export default function ResultadosPage() {
    return (
        <div class="main-page">
            <BarraNavegacion/>
            <Libreradio/>
            <Results />
            <Foot/>
        </div>
    );
}
