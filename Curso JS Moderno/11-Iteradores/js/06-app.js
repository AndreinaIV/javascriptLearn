//forEach: Es ideal para recorrer un arreglo 

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice} : ${pendiente}` )

})

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const nuevoArreglo = carrito.forEach( producto => producto.nombre); //.precio

const nuevoArreglo2 = carrito.map( producto => producto.nombre); //Crea arreglo nuevo y .forEach no

console.log(nuevoArreglo);
console.log(nuevoArreglo2);