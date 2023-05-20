const nombre = prompt('Ingrese su nombre', '');
const nota = parseInt(prompt('Ingrese su nota', ''));


if(Number.isNaN(nota)) {
    document.write('La nota ingresada no es valida')
} else if(nota >= 4){
    document.write(`${nombre} esta aprobado con la nota ${nota}`)
} else {
    document.write(`${nombre} esta desaprobado con la nota ${nota}`)
}