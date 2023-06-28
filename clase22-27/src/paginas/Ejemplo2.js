import { EjemploEstado01, EjemploEstado02 } from "../componentes/layout/Estado";
import '../styles/estado.css';



const Ejemplo2 = props =>{
    return(
        <div>
        <h1>Ejemplo Estados - Hook</h1>
        <EjemploEstado01/>
        <hr/>
        <EjemploEstado02/>
        </div>
    )
}

export default Ejemplo2;