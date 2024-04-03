import { datos } from "../utils/datos.ts";
import { useState } from "preact/hooks";

export default function BarraNavegacion() {

    const [file, setFile] = useState("");

    const handleChange = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
          setFile(JSON.stringify(JSON.parse(e.target.result)));
          //ToDo datos = file
        };
    };

    const saveJsonFile = () => {
        const jsonObj = `data:text/json;chatset=utf-8,${encodeURIComponent(
          JSON.stringify(datos)
        )}`;
        const anchor = document.createElement("a");
        anchor.href = jsonObj;
        anchor.download = "Datos.json";

        const clickEvt = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
        });

        anchor.dispatchEvent(clickEvt);
        anchor.remove();
    };

    return (
    <div class="Navbar">
        <div class="actionButtons">
            <input class="fakeButton" type="file" onChange={handleChange} />
            <a class="fakeButton" href="#">Guardar Evaluacion</a>
            <button class="fakeButton" onClick={saveJsonFile} >Guardar mis datos</button>
            <a class="fakeButton" target="_blank" href="mailto:contactolibreradio@proton.me">¡Envianos un comentario!</a>
        </div>
    </div>
           );
}
