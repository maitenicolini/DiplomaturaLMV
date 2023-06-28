const numeros = [56, 100, 1245, 43, 50];


for (let i=0; i < numeros.length; i++ ){
    console.log(numeros[i])
}//con esto recorremos el array

//va let xq puede cambiar
let mayor = 0;//armo una variable q arranque en 0


for (let i=0; i < numeros.length; i++ ){
    if(numeros[i] > mayor)//si nros es mayor a 0
        mayor = numeros[i]
}
console.log(`El mayor de estos numeros: ${numeros} es ${mayor}`)