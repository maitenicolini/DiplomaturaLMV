const frutas = [`Manzana`, `Banana` , `Palta` , `Frutilla`, `naranja`, `limones`, `mandarinas`]

console.log(frutas)
console.log(frutas.length) //cantidad

console.log(frutas[2])

const ultimo = frutas[frutas.length-1]
console.log(ultimo) //frutilla

const seleccionado =  2
console.log(frutas[seleccionado])//palta

for(let i = 0; i < frutas.length; i++){
    console.log( 'tenemos' + frutas[i])
}