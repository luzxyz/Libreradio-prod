import Foot from "../components/Foot.tsx";
import Bandas from "../islands/Bandas.tsx";
import ActionButtons from "../islands/ActionButtons.tsx";

export default function Home() {
  return (
    <div class="main-page">
        <div class="section-title">
            <h1 class="main-title"><span class="star-font">Libre</span>Radio</h1>
            <p>Hecho en Fresh 🍋</p>
        </div>
        <Bandas/>
        <ActionButtons/>
        <Foot/>
    </div>
  );
}
