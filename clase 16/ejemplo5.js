const alternar = document.getElementsByClassName('alternar')[0];
console.log(alternar) 

alternar.addEventListener('click', function(e){
    e.currentTarget.classList.toggle('activo')
})