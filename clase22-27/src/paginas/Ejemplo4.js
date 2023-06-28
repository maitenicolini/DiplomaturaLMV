import alumnos from '../data/alumnos.json'

const CargaJson = props =>{
    return(
        <div>
        <h1>Carga JSON</h1>
        <ul>
            {
                alumnos.map(alumno =>(
                    <li>{alumno.nombre} {alumno.apellido} - ({alumno.edad})</li>
                )
                )
            }
        </ul>
        </div>
    )
}

export default CargaJson;