const datosUsuarios = [
    {
        nombre: 'Flavia',
        password: '1234'
    },
    {
        nombre: 'Laura',
        password: '564232'
    },
    {
        nombre: 'Leonardo',
        password: 'sfdwf'
    },
    {
        nombre: 'Rodolfo',
        password: 'jussfg'
    },
    {
        nombre: 'Romina',
        password: 'abcddgr'
    }
]


const soloPassword = datosUsuarios.map(function(e){
    return e.password;
})
console.log(soloPassword)


