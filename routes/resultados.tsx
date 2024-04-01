import Foot from "../components/Foot.tsx";
import Libreradio from "../components/Libreradio.tsx";
import Results from "../islands/Results.tsx";

export default function ResultadosPage() {
    return (
        <div class="main-page">
            <Libreradio/>
            <Results />
            <Foot/>
        </div>
    );
}
