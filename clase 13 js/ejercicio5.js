 const num1 = parseInt(prompt(`ingrese su primer numero`, ``))//3
 const num2 = parseInt(prompt(`ingrese su segundo numero`, ``))//7
 const num3 = parseInt(prompt(`ingrese su tercer numero`, ``))//9 

 if (num1 > num2 && num1 > num3){
    console.log(`el numero mayor es el ${num1}`)
 } else if (num2 > num3){
    console.log(`el numero mayor es el ${num2}`)
 } else{
    console.log(`el numero mayor es el ${num3}`)
 }