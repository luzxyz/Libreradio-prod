interface boolInfoProps {
    condicion: boolean;
    info: string[];
    aplica: boolean;
}

export default function info( props : boolInfoProps) {

    let classes= "boolInfo " + props.condicion.toString();

    if (!props.aplica) {
        classes= "boolInfo noAplica";
    }

    return (
            <div class={classes}>
                <div>
                if (props.aplica){
                    <img src="cap.svg" alt="Aplica" />
                    <h2>Aplica</h2>
                } else {  
                    <img src="cap.svg" alt="noAplica" />
                    <h2>No aplica</h2>
                }
                </div>
                <div>
                if (props.condicion){
                    <h2>Cumple</h2>
                } else {
                    <h2>No cumple</h2>
                }
                {props.info.map((detalles: string) => <p>{detalles}</p>)}
                </div>
            </div>
           );
}
