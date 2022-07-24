const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//Para acceder solo a nombre
//for(let i = 0; i < carrito.length; i++ ) {
  //  console.log( carrito[i].nombre );
//}


for(let i = 0; i < carrito.length; i++ ) {
   console.log( `${carrito[i].nombre} - precio: ${carrito[i].precio}` );
}

carrito.forEach( function(producto) {
  console.log( `${producto.nombre} - precio: ${producto.precio}` );
})