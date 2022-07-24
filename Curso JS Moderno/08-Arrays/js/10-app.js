const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const nuevoArreglo = carrito.map( function(producto) {
    return `${producto.nombre} - precio: ${producto.precio}`;
  })


const nuevoArreglo2 = carrito.forEach( function(producto) {
  return `${producto.nombre} - precio: ${producto.precio}`;
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);


//La diferencia entre forEach y .map es que map llena una variable con un NUEVO ARREGLO