import { useState } from "react";

const EjemploEstado01 = props =>{
    const[activo, setActivo]= useState(true);//activa a variable y setActivo funcion que lo modifica

    const toggleActivo = e =>{
        setActivo(!activo);//negacion booleano -> setea el activo al contrario de lo que este ativo
    }

    return(
        <div>

            <input type="text" placeholder="escribime" disabled={!activo}></input>{/*diabled > desabilitado */}
            <button onClick={toggleActivo}>{activo ? 'Desactivar' : 'Activar'}</button>{/*operador ternario q ve lo que pasa con la variable activo*/}
        </div>
    )
}

const EjemploEstado02 = props =>{

    const[counter, setCounter] = useState(0);//counter es variable 1 y setCounter lo modifica. useState(0) es q el valor inicial es 0

    return(
        <div className="container"> 
        <div className="counter">
            <h3>{`Contador: ${counter}`}</h3>

        </div>
        <div className="button">
            <button className="sucess" onClick={() => setCounter(counter + 1)}>+</button>
            <button className="error"  onClick={() => setCounter(counter - 1)}>-</button>
        </div>
        {/*cada vez q apretemos el boton setCounter, counter se va a ir modificando*/}

        </div>
    )
}




export{
    EjemploEstado01,
    EjemploEstado02
}