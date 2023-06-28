import { EjemploProps01, EjemploProps02, EjemploProps03, EjemploProps04, EjemploProps05 } from "../componentes/Props";


const name= 'Pablo'
const frutas =['manzanas', 'bananas', 'peras', 'paltas']
const mostrarValor = valor =>{
    console.log(valor)
}


const Ejemplo1 = (props) =>{
    return(
        <div>
        <h1>Ejemplos de propiedades</h1>
        <h3>propiedad simple y reutilizable</h3>
        <EjemploProps01 nombre='Flavia'/>
        <EjemploProps01 nombre={name}/>
        <hr/>
        <h3>listado de elementos</h3>
        <EjemploProps02 elementos={frutas}/>
        <hr/>
         <h3>multiples propiedades y destructuring</h3>
         <EjemploProps03 titulo = 'noticia X' subtitulo='aca estamos aprendiendo react' cuerpo='soy el cuerpo de la noticia'/>
         <hr/>
         <h3>Evento (al tener cambiarValor funciona)</h3>
         <EjemploProps04 cambiarValor={mostrarValor}/>
         <h3>Evento, ahora esta el fi que controla antes</h3>
         <EjemploProps05 eventoClick={mostrarValor}/>
         {/*en este ej no se rompe la pagina(consola) xq controlamos desde if*/}
         <EjemploProps05/>

        </div>
    )
}

export default Ejemplo1;