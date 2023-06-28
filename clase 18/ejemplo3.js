const empleados = [
    {
        nombre:'Flavia',
        trabajo: 'desarrollador'
    },
    {
        nombre:'Juan',
        trabajo: 'Medico'
    },
    {
        nombre:'Pedro',
        trabajo: 'desarrollador'
    },
    {
        nombre:'Rodrigo',
        trabajo: 'Empleado'
    },
    {
        nombre:'Luna',
        trabajo: 'desarrollador'
    },
    {
        nombre:'Tomas',
        trabajo: 'Plomero'
    },
]
//objetivo1: que me muestre desarrolladores
//objetivo2: que me muestre los NO desarrolladores

const desarrollador = empleados.filter(
    empleado => empleado.trabajo == 'desarrollador'
)
console.log(desarrollador)


const nodesarrollador = empleados.filter(
    empleado => empleado.trabajo !== 'desarrollador'
)
console.log(nodesarrollador)





