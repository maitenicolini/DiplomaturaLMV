
function getNameDiasForMes(mes){

    if (Number.isNaN(mes)) return false;

    if (mes < 1 || mes > 12) return false;
    mes --;


    const data =[
        {
            nombre: 'Enero',
            dias: 31
        },
        {
            nombre: 'Febrero',
            dias: 28
        },
        {
            nombre: 'Marzo',
            dias: 31
        },
        {
            nombre: 'Abril',
            dias: 30
        },
        {
            nombre: 'Mayo',
            dias: 31
        },
        {
            nombre: 'Junio',
            dias: 31
        },
        {
            nombre: 'Julio',
            dias: 31
        },
        {
            nombre: 'Agosto',
            dias: 31
        },
        {
            nombre: 'Septiembre',
            dias: 31
        },
        {
            nombre: 'octubre',
            dias: 31
        },
        {
            nombre: 'Noviembre',
            dias: 31
        },
        {
            nombre: 'Diciembre',
            dias: 31
        }
    ]
}
function validarNumero(str) {

    const regex = /^(1[0-2]|[1-9])$/;

    return regex.test(str);

}



const numMes = prompt('Ingrese el mes del año', '');

let resultado = false;

if (validarNumero(numMes)) {

    resultado = getNameDiasForMes(numMes);

}





if (resultado) {
    alert(`El mes ${resultado.nombre} tiene ${resultado.dias} dias.`)
} else {
    alert(`Mes invalido`);
}