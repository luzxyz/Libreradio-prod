import { listaDatos } from "../utils/datos.ts";

export default function ActionButtons() {

    const saveJson = () => {
        const jsonObj = `data:text/json;chatset=utf-8,${encodeURIComponent(
          JSON.stringify(listaDatos)
        )}`;
        const anchor = document.createElement("a");
        anchor.href = jsonObj;
        anchor.download = "listaDatos.json";

        const clickEvt = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
        });

        anchor.dispatchEvent(clickEvt);
        anchor.remove();
    };

    return (
    <div class="actionButtons">
        <a class="fakeButton" href="/resultados">Evaluar</a>
        <button class="fakeButton" onClick={saveJson} >Guardar mis datos</button>
        <a class="fakeButton" target="_blank" href="mailto:email@mail.com">¡Envianos un comentario!</a>
    </div>
           );
}
