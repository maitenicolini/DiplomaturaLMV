function validarForm(){
    const nombreValido = true;
    const passwordValido = validarLargo(document.form1.texto.value, 5);

    const resultado = nombreValido && passwordValido;

    if(resultado){
        alert('ES VALIDO')
    } else {
        alert('NO ES VALIDO')
    }
}



function validarLargo(texto, LargoRequerido){
    return texto.length >= LargoRequerido

}