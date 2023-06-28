const distancia=parseInt(prompt('Ingrese la distancia', ''));

if(Number.isNaN(distancia)){
    document.write('Debe ingresar un valor numerico.')
}else if(distancia <= 1000){
    document.write('Puedes ir a pie')
} else if(distancia > 1000 && distancia <=10000){
    document.write('Puedes ir en bici')
} else if(distancia > 10000 && distancia <=30000){
    document.write('Puedes ir a colectivo')
} else if(distancia > 30000 && distancia <= 1000000 ){
    document.write('Puedes ir en auto')
} else if(distancia > 1000000){
    document.write('Puedes ir en avion')
} 