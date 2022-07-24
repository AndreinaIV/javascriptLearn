const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true, 
}

//Keys para saber si un objeto está vacio o inf de él. Parte izquierda del objeto
console.log( Object.keys( producto ) );

//Parte derecha del objeto
console.log(Object.values( producto ));

//Entries retorna todos los valores
console.log(Object.entries( producto ));