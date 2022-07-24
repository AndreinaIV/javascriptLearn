const autenticado = true;

if(autenticado) {  // No es necesario agregar === true porque autenticado es = true
    console.log('El usuario está autenticado')
}

const puntaje = 450;

function revisarPuntaje() {
    if(puntaje > 400) {
        console.log('Excelente!!!')
        return;
    }
    
    if(puntaje > 300){
        console.log('Buen puntaje... felicidades!')
        return;
    }
}

revisarPuntaje(); 
