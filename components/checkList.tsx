function LadoIzquierdo({aplica, condicion}) {
    if (condicion){
        return(<div class="boolInfoLeft">
            <img src="check.svg" alt="Aplica" width="50"/>
        </div>);
    } else {  
        return(<div class="boolInfoLeft">
            <img src="fail.svg" alt="noAplica" width="50"/>
        </div>);
    }
}

function LadoDerechoTitulo({condicion}){
    if (condicion){
        return <h2>cumple</h2>;
    } else {
        return <h2>no cumple</h2>;
    }
}

interface checkProps {
    condicion: boolean;
    info: string[];
    aplica: boolean;
}

export default function CheckList( props : checkProps ) {

    let classes= "boolInfo " + props.condicion.toString();

    if (!props.aplica) {
        classes= "boolInfo noAplica";
    }

    return (
            <div class={classes}>
                <LadoIzquierdo
                    aplica={props.aplica}
                    condicion={props.condicion}/>
                <div>
                    <LadoDerechoTitulo condicion={props.condicion} />
                    {props.info.map((detalles: string) => <p>✔️ {detalles}</p>)}
                </div>
            </div>
           );
}
