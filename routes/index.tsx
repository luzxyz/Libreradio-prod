import Foot from "../components/Foot.tsx";
import Libreradio from "../components/Libreradio.tsx";
import Bandas from "../islands/Bandas.tsx";
import ActionButtons from "../islands/ActionButtons.tsx";

export default function Home() {
  return (
    <div class="main-page">
        <Libreradio />
        <Bandas/>
        <ActionButtons/>
        <Foot/>
    </div>
  );
}
