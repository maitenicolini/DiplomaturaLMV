import '../styles/ejemplo5.css'

import { useState, useEffect } from 'react';

const DatosApi = props => {
    const [cargando, setCargando] = useState(false);
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        //fetch sirve para traer datos nativos de JS
        //otro modo de traerlo puede ser con la dependencia axios(formulario)
        //async- await son funciones asincronicas, es decir yo nose cuando van a ir a buscar los datos.
        const cargarDatos = async () => {
            setCargando(true); //cambio estado a true
            const res = await (await fetch('https://rickandmortyapi.com/api/character')).json();
            setPersonajes(res.results);//obtengo personajes res > respuesta
            setCargando(false)// vuelvo a dejarlo e false(su estado inicial)
        }
        cargarDatos();

    }, []);



    return (
        <div>
            <h1>Carga API</h1>
            {cargando ? <p>Cargando...</p> : (//si esta cargando aparece "cargando.." y sino, aparece todo lo de abajo)
                <div className="personajes">
                    {personajes.map(personaje => (
                        <div className="personaje" key={personaje}>
                            <h4>{personaje.name}</h4>
                            <div className="foto">
                                <img src={personaje.image} alt={personaje.name} />
                            </div>
                            <div className="datos">
                               <h6>{personaje.species === 'Human' ? 'Human' : personaje.species}</h6>
                              <h6>Vivo: {personaje.status === 'Alive' ? 'SI' : personaje.status}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DatosApi;