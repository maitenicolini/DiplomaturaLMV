
const edad= parseInt(prompt('Ingrese su edad', ''));

if(Number.isNaN(edad)){
    document.write('Debe ingresar un valor numerico.')
} else if(edad >=18){
    document.write('Puedes conducir')
} else{
    document.write('Todavia no puedes conducir, eres menor de edad')
}