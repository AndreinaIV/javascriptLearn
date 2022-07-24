const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//.every Todos los elementos de un arreglo deben cumplir la condicion para que retorne un true

const resultado = carrito.every(producto => producto.precio < 1000); //Revisa que todos cumplan la condicion
console.log(resultado);

const resultado2 = carrito.some(producto => producto.precio < 500); //Revisa que al menos uno cumpla la condicion
console.log(resultado2);