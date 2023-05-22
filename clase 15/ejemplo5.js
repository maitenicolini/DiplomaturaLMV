const items = document.getElementsByClassName('item');

//console.log(items);

function cambiarVisibilidad(numItem){ 

    const item = items[numItem];

    if(item.style.visibility == ''){//nsi itemsstyle... no teiene aplicado nada q se aplique style hidden
    item.style.visibility = 'hidden'
} else{
    item.style.visibility = ''//le saco lo que tiene aplicado, x eso vuelve a aparecer el elemento
}
}

function cambiarDisplay(numItem){

    const item = items[numItem];
    if(item.style.display == ''){ 
        item.style.display = 'none'
    }else{
        item.style.display = ''
    }
}